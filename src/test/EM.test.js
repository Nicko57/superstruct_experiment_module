import renderer from 'react-test-renderer'

import { EM } from './EM'

test('renders learn react link', () => {
  console.log('here')
  const tree = renderer.create(<EM />).toJSON()
  expect(tree).toMatchInlineSnapshot(`
<div
  className="rounded-lg p-6 bg-zinc-900 text-left text-zinc-600 w-[600px]"
>
  <div
    className="flex justify-between items-center hover:cursor-pointer"
    onClick={[Function]}
  >
    <span
      className="text-gray-400 font-bold text-2xl"
    >
      Experiment Module
    </span>
  </div>
  <div
    className="hidden"
  >
    <div
      className="mt-4 rounded-lg flex flex-col gap-1"
    />
    <div
      className="ml-auto mt-6 mr-0 text-right font-bold"
    >
      <span
        className="px-4 uppercase hover:cursor-pointer hover:text-white"
        onClick={[Function]}
      >
        Lock
      </span>
      <span
        className="px-4 uppercase hover:cursor-pointer hover:text-white"
      >
        Reset
      </span>
      <span
        className="px-4 uppercase hover:cursor-pointer hover:text-white"
        onClick={[Function]}
      >
        + Add Iteration
      </span>
    </div>
  </div>
</div>
`)
});