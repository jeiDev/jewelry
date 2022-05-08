import ContainerGrid4x4 from "~/components/app/container/grid4x4"

const HomeSection4 = () => {
    
    return (
        <ContainerGrid4x4 
            reverse={true}
            title="Jewelry Manufacturing"
            description="We work with you to make sure your jewelry is produced exactly as your specify and with impeccable standards. We can manufacture a unique collection for your store, or even work with custom orders for your customers. "
            button={{
                link: "#",
                title: "Read more"
            }}
            image={{
                description: "Fixing jewel",
                src: "/images/home/fixing-jewel.jpg"
            }}
        />
    )
}

export default HomeSection4