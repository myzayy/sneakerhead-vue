<template>
    <div class="col-md-12">
        <h3>Customer Reviews ({{ reviews.length }})</h3>
        <p></p>
        <div v-if="reviews && reviews.length > 0">
            <div v-for="review in reviews" :key="review.review_id" class="review-entry border mb-3 p-3">
                <div class="d-flex justify-content-between">
                    <strong>{{ review.author }}</strong>
                    <span class="text-muted">{{ review.date }}</span>
                </div>
                
                <div class="stars text-warning">
                    <span v-for="n in review.stars" :key="n">★</span>
                </div>

                <p class="mt-2">{{ review.text }}</p>
            </div>
        </div>

        <div v-else class="text-center p-4 bg-light">
            <h4>No reviews here yet.</h4>
        </div>
    </div>
</template>

<script>
    import productsData from '../products.json';
    export default {
        name: 'ProductReviews',
        props: {
            reviews: {
                type: Array,
                default: () => []
            }
        }
    }
</script>