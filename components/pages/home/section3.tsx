import ContainerGrid4x4 from "~/components/app/container/grid4x4"

const HomeSection3 = () => {
    
    return (
        <ContainerGrid4x4 
            title="Engagement Ring"
            description="Our team of 3d modelers and jewelers can create literally any ring you can imagine, including complex designs. We're opening up our services to private clients, so you can get a beautiful, designer quality engagement ring at an affordable price."
            button={{
                link: "#",
                title: "Read more"
            }}
            image={{
                description: "Pexels say straight",
                src: "/images/home/pexels-say-straight.jpg"
            }}
        />
    )
}

export default HomeSection3