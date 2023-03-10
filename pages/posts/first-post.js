import Link from "next/link";
import Image from "next/image";

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <Image src={"/images/profile.jpg"} alt={"My Profile"} height={144} width={144}/>
        </>
    )
}
