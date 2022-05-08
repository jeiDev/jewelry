export const menuTogglePathSettingAnimation = [
    {
        variants: {
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
        }
    },
    {
        d: "M 2 9.423 L 20 9.423",
        variants: {
            closed: { opacity: 1 },
            open: { opacity: 0 }
        },
        transition: { duration: 0.1 }
    },
    {
        variants: {
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
        }
    }
]

export const itemsNavHeaderSetting = {
    open: () => ({
        width: "50vw",
        transition: {
            type: "spring"
        }
    }),
    closed: {
        width: "0px",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};
