export const getStaticPaths = async () => {};

export const getStaticProps = async (context) => {
  const id = context.params.id;
};

export default function Detail(context) {
  return (
    <div>
      <h1>Details of {context.id}</h1>
    </div>
  );
}
