import loading from "@/assets/loading.gif";

const styleCSS = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    background: `url(${loading}) 50% 50% no-repeat rgb(249,249,249)`
}

export const SpinLoader = () => {
    return (
        <div style={styleCSS}></div>
    )
}