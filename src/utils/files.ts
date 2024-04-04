export async function convertUrlToFileJpg(url: string) {
  const response = await fetch(url);
  const data = await response.blob();
  const metadata = {
    type: 'image/jpeg',
  };

  return new File([data], 'file.jpg', metadata);
}
