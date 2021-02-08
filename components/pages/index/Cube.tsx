import { useRef, useEffect } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { CircleGeometry, Vector3 } from "three";
import type { Mesh } from "three";

export const Cube = () => {
    const mesh = useRef<Mesh>(null);

    const dotGeometry = new CircleGeometry(2, 5);

    const vector = new Vector3();
    vector.setFromSphericalCoords(600, 300, 300);

    dotGeometry.lookAt(vector);

    return (
        <mesh position={[0, 0, 0]} ref={mesh}>
            <circleBufferGeometry args={[2, 5]} lookAt={() => vector} />
            <sphereBufferGeometry args={[4.5, 100, 100]} />
            <meshStandardMaterial color={"#4B36F8"} />
        </mesh>
    );
};

export const Camera = () => {
    const ref = useRef(null);

    const { setDefaultCamera } = useThree();

    useEffect(() => void setDefaultCamera(ref.current), []);
    useFrame(() => ref.current.updateMatrixWorld());

    return <perspectiveCamera ref={ref} position={[0, 0, 11]} />;
};
