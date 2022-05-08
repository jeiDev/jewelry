import Button from "~/components/app/buttons"
import RowRight from "~/components/svg/row-right.svg"
import style from "~/styles/pages/home/section1.module.css"

const HomeSection1 = () => {

    return (
        <section className={style.container}>
            <div className="row">
                <div className={`col-md-12 col-lg-6 ${style.containerInfo}`}>
                    <h2 className={style.title}>Beautiful, masterful design never goes out of fashion.</h2>
                    <div className={style.boxButtons}>
                        <Button 
                            background="var(--bg-secondary-color)" 
                            color="white"
                        >
                            Contact
                        </Button>

                        <Button>
                            <div className={style.buttonGallery}>
                                <span>Gallery</span>
                                <RowRight />
                            </div>
                        </Button>
                    </div>
                </div>
                <div className={`col-md-12 col-lg-6 ${style.containerImage}`}>
                    <div className={style.boxImage}>
                        <img src="/images/home/diamond-earring.png" alt="diamond earring" />
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default HomeSection1;