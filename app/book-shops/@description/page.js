export default async function DescriptionPage() {
  // simulate loading time for 6 seconds
  await new Promise((resolve) => setTimeout(resolve, 6000));

  return <h4>DESCRIPTION COMPONENT LOADED</h4>;
}
