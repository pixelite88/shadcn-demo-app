import {DemoChart} from '@/components/demo-chart';

export default function Page() {
  return <>
    <h1 className="text-3xl font-bold mx-auto mt-10 text-center">Charts</h1>
    <div className="max-w-5xl mx-auto my-auto">
      <DemoChart />
    </div>
  </>
}
