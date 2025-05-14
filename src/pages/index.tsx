
export default function Home(){
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Top Restaurants 🍕</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Placeholder cards */}
            {[1, 2, 3].map((r) => (
                <div
                key={r}
                className="border rounded-xl p-4 shadow hover:shadow-lg transition"
                >
                <h3 className="font-semibold">Restaurant #{r}</h3>
                <p className="text-sm text-gray-500">50% off on orders above ₹299</p>
                </div>
            ))}
            </div>
        </div>
    );
}