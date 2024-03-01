import { EM } from './test/EM'
import './App.css'

function App() {
  return (
    <>
      <h1 className="mb-8 font-bold text-2xl">This is our Test Page</h1>
      <div className='flex flex-col gap-5 p-4 bg-black'>
        <EM iterations={[
          { selection: 2, title: 'Iteration title 1' },
          { selection: 4, title: 'Iteration title 2' },
          { selection: 1, title: 'Iteration title 3' },
        ]} />
        <EM iterations={[
          { selection: 2, title: 'Iteration title 1' },
          { selection: 4, title: 'Iteration title 2' },
          { selection: 1, title: 'Iteration title 3' },
        ]} />
        <EM collapse={true} iterations={[
          { selection: 2, title: 'Iteration title 1' },
          { selection: 4, title: 'Iteration title 2' },
          { selection: 1, title: 'Iteration title 3' },
        ]} />
        <EM iterations={[
          { selection: 2, title: 'Iteration title 1' },
          { selection: 4, title: 'Iteration title 2' },
          { selection: 1, title: 'Iteration title 3' },
        ]} />
        <EM iterations={[
          { selection: 2, title: 'Iteration title 1' },
          { selection: 4, title: 'Iteration title 2' },
          { selection: 1, title: 'Iteration title 3' },
        ]} />
      </div>
    </>
  )
}

export default App
