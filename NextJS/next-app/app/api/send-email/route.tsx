import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

new Resend(process.env.RESEND_API_KEY);
/*
export async function POST() {
    await Resend.email.send({
        from: '...', #irgend eine Domain
        to: 'jonas.miejski@gmail.com',
        subject: '...',
        react: <WelcomeTemplate name="Jonas" />
    })
    return NextResponse.json({});
}
*/
