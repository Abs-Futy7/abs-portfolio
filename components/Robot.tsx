"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: TeKen_art30 (https://sketchfab.com/ken_art30)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/robot-rocket-f04d70f5a38943098da45f76e7ebb238
Title: Robot RoCKet
*/
import * as THREE from "three";
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Group } from 'three'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RobotProps extends React.ComponentPropsWithoutRef<'group'> {}

export function Robot(props: RobotProps) {
  const group = useRef<Group>(null)
  const { nodes, materials, animations }: {
    nodes: {
      _rootJoint: THREE.Bone
      Object_9: THREE.SkinnedMesh
      Object_10: THREE.SkinnedMesh
      Object_11: THREE.SkinnedMesh
      Object_12: THREE.SkinnedMesh
      Object_13: THREE.SkinnedMesh
      Object_14: THREE.SkinnedMesh
      Object_15: THREE.SkinnedMesh
    }
    materials: {
      naranja: THREE.Material
      turqueza: THREE.Material
      luz_neon: THREE.Material
      azul: THREE.Material
    }
    animations: THREE.AnimationClip[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useGLTF('/robot_rocket.glb') as any
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.012}>
          <group name="99bb25453ae64b8c9ac16992b24eafaefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Sphere"
                  position={[0, 45.158, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={101.805}
                />
                <group
                  name="metarig"
                  position={[0, -126.157, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={141.779}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.naranja}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.naranja}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.turqueza}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.luz_neon}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.azul}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.azul}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.azul}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <group
                      name="Object_8"
                      position={[0, 45.158, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={101.805}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/robot_rocket.glb')


