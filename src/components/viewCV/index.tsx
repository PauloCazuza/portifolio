'use client';

function ViewCV() {
    if (typeof window === "undefined")
        return null;
    const width = window?.innerWidth * 0.4;
    const height = window?.innerHeight * 0.8;

    return (
        <div className="flex">
            <iframe src="https://onedrive.live.com/embed?resid=B23DA2F91409EA5B%21162564&authkey=!ALpKdDb-23UmFt0&em=2"
                className=""
                width={width}
                height={height}
                frameBorder="0"
                scrolling="yes"
            />
            <iframe src="https://onedrive.live.com/embed?resid=B23DA2F91409EA5B%21162566&authkey=!AG3hUdHGXR-fO0M&em=2"
                className=""
                width={width}
                height={height}
                frameBorder="0"
                scrolling="no"
            />
        </div>
    );
}

export default ViewCV;