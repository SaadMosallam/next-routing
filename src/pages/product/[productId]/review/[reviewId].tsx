import { useRouter } from "next/router"

export default function ProductReview() {
    const router = useRouter();
    const productId = router.query.productId;
    const productReview = router.query.reviewId;
    return (
     <h1>Review of product {productId} is of id {productReview}</h1>
    )
}