import { useDashboardCharts } from "@App/components/pages/dashboard/useDashboardCharts";
import { withChildren } from "@App/utils/children";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

type State = "Overview" | "Trades Out" | "Trades In";

const TabController = () => {
  const [state, setState] = useState<State>("Overview");

  return (
    <div>
      <Tab value={state} state={"Overview"}>
        <div></div>
      </Tab>
    </div>
  );
};

interface TabProps {
  state: State;
  value: State;
}

const Tab = withChildren<TabProps>(({ children, state, value }) => {
  return state === value && <div>{children}</div>;
});

const Dashboard = () => {
  const { NetValueChart } = useDashboardCharts();

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>

      <main>
        <div className="flex flex-row">
          <aside className="w-72 min-h-screen sticky py-12 px-6 top-0 bg-gradient-to-b from-gray-50 to-gray-100 border border-r border-gray-200">
            <div className="flex flex-col">
              <img
                className="rounded w-20 h-20 mx-auto mb-5"
                src="https://crafatar.com/avatars/066a5000-7852-4871-8ad1-10861a90f0fd"
                width="auto"
                height="auto"
                // width={50}
                // height={50}
              />

              <h1 className="font-semibold text-black text-center">
                Stevemmmmm
              </h1>

              <ul className="my-5">
                <li>
                  <h1 className="font-semibold">General ▲</h1>
                </li>
                <li className="text-sm cursor-pointer transition text-black hover:text-blue-600 w-max">
                  Weekly Summary
                </li>
                <li className="text-sm cursor-pointer transition text-black hover:text-blue-600 w-max">
                  Graphs
                </li>
                <li className="text-sm cursor-pointer transition text-black hover:text-blue-600 w-max">
                  Economy News
                </li>
              </ul>
            </div>
          </aside>

          <div className="flex flex-col w-full min-h-screen bg-gray-100">
            <header className="w-full bg-white p-12 pb-0 relative space-y-7">
              <div>
                <h1 className="font-bold text-4xl text-gray-900">
                  Weekly Summary
                </h1>

                <h2 className="mt-1 text-gray-800">
                  A summary of your weekly trading accomplishments.
                </h2>
              </div>

              <div>
                <div className="flex flex-row space-x-10">
                  <div className="w-max cursor-pointer">
                    <h1 className="mb-2 px-2 font-medium">Overall</h1>

                    <div className="h-0.5 bg-blue-600" />
                  </div>

                  <div className="w-max cursor-pointer">
                    <h1 className="mb-2 px-2 font-medium text-gray-500">
                      Trades In
                    </h1>

                    <div className="h-0.5 bg-blue-600 hidden" />
                  </div>

                  <div className="w-max cursor-pointer">
                    <h1 className="mb-2 px-2 font-medium text-gray-500">
                      Trades Out
                    </h1>

                    <div className="h-0.5 bg-blue-600 hidden" />
                  </div>
                </div>
              </div>
            </header>

            <div className="my-5">
              <TabController />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
