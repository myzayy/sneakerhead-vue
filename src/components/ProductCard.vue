<template>
    <div class="col-lg-3 mb-4 text-center">
		<div class="product-entry border">

			<RouterLink :to="'/product/' + id" class="prod-img">
				<img :src="image" class="img-fluid" :alt="title">
            </RouterLink>
			<div class="desc">
				<h2>
                    <RouterLink :to="'/product/' + id">{{ title }}</RouterLink>
                </h2>
                <span class="price">{{ price }}</span>
			</div>
		</div>
	</div>
				
</template>

<script>
    export default {
        name: 'ProductCard',
        // props - data which given to component outside
        props: {
            id: {
                Type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            title: {
                // data validation
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            
        }
    }
</script>