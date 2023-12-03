import MaxWidthWrapper from "@/components/MaxWidthWrapper"

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center  max-w-3xl'>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
            Your destination for cutting-edge{' '}
            <span className='text-blue-600'> Digital Treasures.</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Amplify your digital odyssey with cutting-edge gear, ensuring a sleek, sophisticated encounter on our visionary platform Hippo 
          </p>

        </div>
      </MaxWidthWrapper>
    </>
  )
}
