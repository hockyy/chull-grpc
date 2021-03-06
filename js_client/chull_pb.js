// source: chull.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.proto.ChullRequest', null, global);
goog.exportSymbol('proto.proto.ChullResponse', null, global);
goog.exportSymbol('proto.proto.Points', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Points = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Points, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Points.displayName = 'proto.proto.Points';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChullRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChullRequest.repeatedFields_, null);
};
goog.inherits(proto.proto.ChullRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChullRequest.displayName = 'proto.proto.ChullRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChullResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChullResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.ChullResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChullResponse.displayName = 'proto.proto.ChullResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Points.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Points.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Points} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Points.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Points}
 */
proto.proto.Points.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Points;
  return proto.proto.Points.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Points} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Points}
 */
proto.proto.Points.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Points.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Points.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Points} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Points.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.proto.Points.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Points} returns this
 */
proto.proto.Points.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.proto.Points.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Points} returns this
 */
proto.proto.Points.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChullRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChullRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChullRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChullRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChullRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    n: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pointsList: jspb.Message.toObjectList(msg.getPointsList(),
    proto.proto.Points.toObject, includeInstance),
    getarea: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    getpoints: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    description: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChullRequest}
 */
proto.proto.ChullRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChullRequest;
  return proto.proto.ChullRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChullRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChullRequest}
 */
proto.proto.ChullRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setN(value);
      break;
    case 2:
      var value = new proto.proto.Points;
      reader.readMessage(value,proto.proto.Points.deserializeBinaryFromReader);
      msg.addPoints(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGetarea(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGetpoints(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChullRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChullRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChullRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChullRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getN();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.Points.serializeBinaryToWriter
    );
  }
  f = message.getGetarea();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getGetpoints();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint32 n = 1;
 * @return {number}
 */
proto.proto.ChullRequest.prototype.getN = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChullRequest} returns this
 */
proto.proto.ChullRequest.prototype.setN = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Points points = 2;
 * @return {!Array<!proto.proto.Points>}
 */
proto.proto.ChullRequest.prototype.getPointsList = function() {
  return /** @type{!Array<!proto.proto.Points>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Points, 2));
};


/**
 * @param {!Array<!proto.proto.Points>} value
 * @return {!proto.proto.ChullRequest} returns this
*/
proto.proto.ChullRequest.prototype.setPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.Points=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Points}
 */
proto.proto.ChullRequest.prototype.addPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.Points, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChullRequest} returns this
 */
proto.proto.ChullRequest.prototype.clearPointsList = function() {
  return this.setPointsList([]);
};


/**
 * optional bool getArea = 3;
 * @return {boolean}
 */
proto.proto.ChullRequest.prototype.getGetarea = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ChullRequest} returns this
 */
proto.proto.ChullRequest.prototype.setGetarea = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool getPoints = 4;
 * @return {boolean}
 */
proto.proto.ChullRequest.prototype.getGetpoints = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ChullRequest} returns this
 */
proto.proto.ChullRequest.prototype.setGetpoints = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.proto.ChullRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ChullRequest} returns this
 */
proto.proto.ChullRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChullResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChullResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChullResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChullResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChullResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    area: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    n: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hullList: jspb.Message.toObjectList(msg.getHullList(),
    proto.proto.Points.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChullResponse}
 */
proto.proto.ChullResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChullResponse;
  return proto.proto.ChullResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChullResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChullResponse}
 */
proto.proto.ChullResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setArea(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setN(value);
      break;
    case 3:
      var value = new proto.proto.Points;
      reader.readMessage(value,proto.proto.Points.deserializeBinaryFromReader);
      msg.addHull(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChullResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChullResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChullResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChullResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getN();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getHullList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.proto.Points.serializeBinaryToWriter
    );
  }
};


/**
 * optional double area = 1;
 * @return {number}
 */
proto.proto.ChullResponse.prototype.getArea = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChullResponse} returns this
 */
proto.proto.ChullResponse.prototype.setArea = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.ChullResponse} returns this
 */
proto.proto.ChullResponse.prototype.clearArea = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChullResponse.prototype.hasArea = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 n = 2;
 * @return {number}
 */
proto.proto.ChullResponse.prototype.getN = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChullResponse} returns this
 */
proto.proto.ChullResponse.prototype.setN = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Points hull = 3;
 * @return {!Array<!proto.proto.Points>}
 */
proto.proto.ChullResponse.prototype.getHullList = function() {
  return /** @type{!Array<!proto.proto.Points>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Points, 3));
};


/**
 * @param {!Array<!proto.proto.Points>} value
 * @return {!proto.proto.ChullResponse} returns this
*/
proto.proto.ChullResponse.prototype.setHullList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.proto.Points=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Points}
 */
proto.proto.ChullResponse.prototype.addHull = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.proto.Points, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChullResponse} returns this
 */
proto.proto.ChullResponse.prototype.clearHullList = function() {
  return this.setHullList([]);
};


goog.object.extend(exports, proto.proto);
