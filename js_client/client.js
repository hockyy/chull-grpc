// npm rebuild
// node_modules/.bin/grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=. --plugin=protoc-gen-grpc=node_modules/.bin/grpc_tools_node_protoc_plugin -I=../protos/ ../protos/*

const messages = require('./chull_pb')
const services = require('./chull_grpc_pb')

const grpc = require('grpc')

function main () {
  const client = new services.ConvexHullFinderClient(
    'localhost:50051',
    grpc.credentials.createInsecure())

  const request = new messages.ChullRequest
  request.setN(1)
  request.setGetpoints(true)
  request.setGetarea(true)
  request.setDescription('Coba dulu')
  const point_converter = (points) => {
    ret = []
    for (const point of points) {
      ret.push(new messages.Points(point))
    }
    return ret
  }
  const proto_to_points_converter =
    (proto) => {
      ret = []
      for (const point of proto) {
        ret.push([point.getX(), point.getY()])
      }
      return ret
    }
  request.setPointsList(point_converter([[0, 3], [2, 2], [1, 1], [2, 1], [3, 0], [0, 0], [3, 3]]))

  client.findConvexHull(request, function (err, response) {
    if (err) {
      console.error(err)
    } else {
      console.log(response.getArea())
      console.log(response.getN())
      console.log(proto_to_points_converter(response.getHullList()))
    }
  })
}

main()
