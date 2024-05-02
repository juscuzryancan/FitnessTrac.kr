import { Link } from "react-router-dom"
const Home = () => {

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 lg:pt-24 xl:pt-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols/[1fr_600px]">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="340"
                src="https://placehold.co/600x340"
                width="600"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-[3.75rem] 2xl:text-6xl">
                    Share Your Fitness Journey
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Connect with others, share your routines, and inspire each other on your fitness journey.
                  </p>
                </div>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  to="/"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols-[1fr_500px] lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Share Your Workout Routines</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Inspire others by sharing your favorite workout routines and tips.
              </p>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover object-center lg:order-last lg:aspect-[16/9]"
              height="250"
              src="https://placehold.co/500x250"
              width="500"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols-[1fr_500px] lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Fitness Challenges</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Take part in exciting challenges and compete with others to reach your fitness goals.
              </p>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover object-center lg:order-last lg:aspect-[16/9]"
              height="250"
              src="https://placehold.co/500x250"
              width="500"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols/[1fr_800px] lg:gap-10">
            <div className="flex flex-col items-center space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Connect with Others</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Share your progress, motivate each other, and build a supportive fitness community.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[800px] space-y-6">
              <blockquote className="text-lg italic text-gray-500 md:text-xl dark:text-gray-400">
                "I've found so much inspiration in the routines shared here. It's like having a personal trainer in my
                pocket!" - Mark L.
              </blockquote>
              <blockquote className="text-lg italic text-gray-500 md:text-xl dark:text-gray-400">
                "The challenges pushed me to new limits and I've never felt stronger. Thanks to everyone for the
                motivation!" - Emily W.
              </blockquote>
              <blockquote className="text-lg italic text-gray-500 md:text-xl dark:text-gray-400">
                "Connecting with others who share the same fitness goals has been a game-changer for me. It's like
                having a virtual workout buddy!" - Adam T.
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 juscuzryancan Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="/">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="/">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default Home;
