import ContainerGrid4x4 from "~/components/app/container/grid4x4"

const HomeSection2 = () => {
    
    return (
        <ContainerGrid4x4 
            reverse={true}
            title="Custom Jewelry"
            description="Our team specializes in designing and crafting complex custom jewelry in gold or platinum. Our 3D designers can work with even the most complex ideas and create a digital model for you to approve before committing to production."
            button={{
                link: "#",
                title: "Read more"
            }}
            image={{
                description: "Pexels the glorious studio",
                src: "/images/home/pexels-the-glorious-studio.jpg"
            }}
        />
    )
}

export default HomeSection2