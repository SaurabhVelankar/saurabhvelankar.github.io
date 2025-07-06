window.sphere = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -1
]

window.xParaboloid = [
    0, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    1, 0, 0, 0
]

window.yParaboloid = [
    1, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 1, 0,
    0, 1, 0, 0
]

window.zParaboloid = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, 0,
    0, 0, 1, 0
]

window.xSlab = [
    1, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, -1
]

window.ySlab = [
    0, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, -1
]

window.zSlab = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -1
]

window.xCylinder = [
    0, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -1
]

window.yCylinder = [
    1, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -1
]

window.zCylinder = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, -1
]

window.everywhere = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, -1
]

window.Quadric = {
    sphere : window.sphere,
    xParaboloid : window.xParaboloid,
    yParaboloid : window.yParaboloid,
    zParaboloid : window.zParaboloid,
    xSlab : window.xSlab,
    ySlab : window.ySlab,
    zSlab : window.zSlab,
    xCylinder : window.xCylinder,
    yCylinder : window.yCylinder,
    zCylinder : window.zCylinder,
    everywhere : window.everywhere
}
