"use client";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>();
  const [user, setUser] = useState<any>(null);

  const load = async () => {
    const { data } = await supabase.from("messages").select("*");
    setMessages(data ?? []);
  };

  const addMessage = async () => {
    await supabase.from("messages").insert({
      text: message /* 'text' Muss ident sein zu den Spaltennamen!!! */,
    });
    load();
    setMessage("");
  };

  const handleAdd = (e: React.SubmitEvent) => {
    e.preventDefault();
    addMessage();
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
    load();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center h-100 w-200 border-2">
          <form onSubmit={handleAdd}>
            <input
              type="text"
              className="input"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            ></input>
            <button disabled={!user} type="submit" className="btn">
              Hinzufügen
            </button>
            {!user && (
              <Link className="btn" href={"/login"}>
                Login
              </Link>
            )}
          </form>
        </div>
        {/* Hier werden die vorhandenen messages angezeigt*/}
        <ul className="pl-20">
          {messages &&
            messages.map((message, index) => (
              <li key={index}>
                {message.id} {message.text} --- {message.created_at}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default MessageForm;
