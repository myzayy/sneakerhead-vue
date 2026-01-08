<template>
    <div class="col-lg-3 mb-4 text-center">
		<div class="product-entry border">
			<a href="#" class="prod-img">
				<img :src="image" class="img-fluid" :alt="title">
			</a>
			<div class="desc">
				<h2><a href="#">{{ title }}</a></h2>
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