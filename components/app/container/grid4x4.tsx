import Button from "../buttons"
import { ContainerGrid4x4PropsI } from "~/interfaces/components/app/container/container.interface"
import style from "~/styles/components/app/container/grid4x4.module.css"

const ContainerGrid4x4 = ({ button, description, image, title, reverse } : ContainerGrid4x4PropsI) => {

    return (
        <div className={`row ${style.container}`} style={{flexDirection: reverse ? "row-reverse" : "row"}}>
            <div className="col-lg-6">
                <div className={style.boxInfo} style={{paddingRight: !reverse ? 30 : 0, paddingLeft: reverse ? 30 : 0}}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Button
                        background="var(--bg-secondary-color)" 
                        color="white"
                        link={button.link}
                    >
                        {button.title}
                    </Button>
                </div>
            </div>
            <div className="col-lg-6">
                <div className={style.boxImage}>
                    <img src={image.src} alt={image.description} />
                </div>
            </div>
        </div>
    )
}

export default ContainerGrid4x4;