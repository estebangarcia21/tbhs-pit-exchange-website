import { useDashboardCharts } from "@App/components/pages/dashboard/useDashboardCharts";
import Head from "next/head";

const Card = ({ title, __inject }: { title?: string; __inject?: string }) => {
    return (
        <figure
            className={`flex flex-col bg-white shadow-lg rounded-md py-4 px-6 ${__inject}`}
        >
            <div className="w-full flex flex-row">
                <p className="text-xl font-semibold">
                    {title ? title : "Net Value"}
                </p>
            </div>

            <div className="flex h-40 flex-col text-center justify-center">
                <h1 className="font-bold text-4xl">
                    32
                    <span className="text-base align-top">FPB</span>
                </h1>

                <h2 className="font-medium text-2xl">IN &darr;</h2>
            </div>
        </figure>
    );
};

const Dashboard = () => {
    const { NetValueChart } = useDashboardCharts();

    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>

            <main>
                <div className="flex flex-row justify-center">
                    <div className="max-w-screen-lg w-full grid gap-5 m-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <Card title="Trade Requests" __inject="row-span-3" />
                        <Card __inject="col-span-2" />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card __inject="col-span-3" />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
