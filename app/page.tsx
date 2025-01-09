import { authOptions } from "@/lib/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Utensils, Clipboard, Truck, Activity } from "lucide-react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="p-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold">H F D M</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 space-y-12">
        <h2 className="text-5xl font-extrabold text-center max-w-3xl">
          Revolutionizing Hospital Food Management
        </h2>

        <p className="text-xl text-center max-w-2xl">
          Streamline patient care with our innovative food management system.
          From personalized diet plans to efficient delivery tracking.
        </p>

        <Link
          href="/dashboard"
          className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center"
        >
          Enter Dashboard
          <ArrowRight className="ml-2" />
        </Link>

        {/* Feature Icons */}
        <div className="flex space-x-12 mt-12">
          <div className="flex flex-col items-center">
            <Utensils size={48} />
            <span className="mt-2">Customized Diets</span>
          </div>
          <div className="flex flex-col items-center">
            <Clipboard size={48} />
            <span className="mt-2">Efficient Management</span>
          </div>
          <div className="flex flex-col items-center">
            <Truck size={48} />
            <span className="mt-2">Tracked Deliveries</span>
          </div>
          <div className="flex flex-col items-center">
            <Activity size={48} />
            <span className="mt-2">Real-time Updates</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 border-t border-gray-200 text-center">
        <p>&copy; 2025 H F D M. All rights reserved.</p>
      </footer>
    </div>
  );
}
