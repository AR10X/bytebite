import { useRouter } from "next/router";

export default function RestaurantPage() {
    const router = useRouter();
    return <h1>Welcome to restaurant no {router.query.id}</h1>;
}