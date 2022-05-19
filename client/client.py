import grpc

import chull_pb2
import chull_pb2_grpc

def list_to_points_objects(points):
    ret = []
    for point in points:
        ret.append(chull_pb2.Points(x=point[0], y=point[1]))
    return ret
def run():
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = chull_pb2_grpc.ConvexHullFinderStub(channel)
        response = stub.FindConvexHull(
            chull_pb2.ChullRequest(n = 3,
                                   points=list_to_points_objects([(0, 3), (2, 2), (1, 1), (2, 1), (3, 0), (0, 0), (3, 3)]),
                                   getArea=True,
                                   getPoints=True,
                                   description="Coba dulu lah hadeh"))
    print(f"Client received: {response}")

if __name__ == '__main__':
    run()
