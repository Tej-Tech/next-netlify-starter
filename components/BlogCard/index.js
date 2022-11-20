 

function BlogCard( props ) {
    const {blogPost} = props

    const {title, description, image} = blogPost

    return (
        <div  >
            <div
                style={{backgroundImage: `url(${image})`}}
                
            />
            <div  >
                <div  >
                    <h3>{title}</h3>
                </div>
                <div  >
                    <span>{description}</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard
