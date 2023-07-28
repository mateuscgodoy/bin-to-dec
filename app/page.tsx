import ConverterForm from "@/components/ConverterForm";

export default function Home() {
  return (
    <main>
      <article className="sm:w-1/2 w-2/3 mx-auto flex flex-col items-center ">
        <section className="mt-20 mb-10 text-center">
          <h1 className="text-4xl font-bold mb-1">
            Binary to Decimal Converter
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Your trustworthy converter for binary numbers.
          </p>
        </section>
        <section className="border-4 border-lime-500 rounded-md w-[400px] py-8
        bg-neutral-100 shadow-md text-center dark:bg-neutral-700">
            <ConverterForm />
          <div >
          </div>
        </section>
      </article>
    </main>
  );
}
