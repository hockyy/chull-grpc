import time

import grpc
from concurrent import futures

import chull_pb2
import chull_pb2_grpc
import chull

_ONE_DAY_IN_SECONDS = 3600 * 24

class Servicer(chull_pb2_grpc.ConvexHullFinderServicer):
    def FindConvexHull(self, request: chull_pb2.ChullRequest, context) -> chull_pb2.ChullResponse:
        print(request)

        chullObject = chull.ConvexHull()
        chullObject.clear()
        for point in request.points:
            chullObject.add(point)
            print(f"({point.x}, {point.y})")
        chullObject.compute_hull()
        hull = chullObject.get_hull_points()
        response_hull = []
        for point in hull:
            response_hull.append(chull_pb2.Points(x=point.x, y=point.y))
            # print(point.x, point.y)
        area = 0
        if(request.getArea):
            for i in range(len(hull) - 1):
                area += hull[i].x * hull[i + 1].y
                area -= hull[i].y * hull[i + 1].x
            area = abs(area)/2
        print(area)
        response = chull_pb2.ChullResponse(hull=response_hull, n = len(response_hull), area=area)
        print(response)
        return response

def main():
    server = grpc.server(futures.ThreadPoolExecutor())
    chull_pb2_grpc.add_ConvexHullFinderServicer_to_server(Servicer(), server)

    server.add_insecure_port('[::]:50051')
    server.start()
    print("Server is running...")
    try:
        while True:
            time.sleep(_ONE_DAY_IN_SECONDS)
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == '__main__':
    main()
