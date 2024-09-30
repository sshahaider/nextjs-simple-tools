import Hero from "@/components/Hero"
import Similler from "@/components/Similler"


export default function Home() {

  const feacherdTools = [
    {
      title: 'Text to UpperCase',
      link: '/text/case-converter/uppercase',
      dec: 'It is a tool that will convert your text to Uppercase Letters'
    },
    {
      title: 'Text to LowerCase',
      link: '/text/case-converter/lowercase',
      dec: 'It is a tool that will convert your text to lowercase letters:'
    },
    {
      title: 'Text to CamelCase',
      link: '/text/case-converter/camelcase',
      dec: 'It is a tool that will convert your text to Camel Case:'
    },
    {
      title: 'Text to PascalCase',
      link: '/text/case-converter/pascalcase',
      dec: 'It is a tool that will convert your text to Pascal Case'
    },
    {
      title: 'Count Words',
      link: '/text/count-words',
      dec: 'It is a tool that will count the number of Words in your text'
    },
    {
      title: 'Count Letters',
      link: '/text/count-letters',
      dec: 'It is a tool that will count the number of letters in your text'
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      <div className='w-full flex flex-col items-center justify-center my-20'>
        <h2>Feacherd Tools</h2>
        <div id='tools' className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {feacherdTools.map((item) =>
            <Similler key={item.link} item={item} />
          )}
        </div>
      </div>


    </div>
  )
}
