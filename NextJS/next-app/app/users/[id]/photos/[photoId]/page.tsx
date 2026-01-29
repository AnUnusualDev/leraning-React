interface Props {
  params: { id: string; photoId: string };
}

const PhotoPage = async ({ params }: Props) => {
  const info = await params;
  return (
    <div>
      Image {info.photoId} from user {info.id}
    </div>
  );
};

export default PhotoPage;
