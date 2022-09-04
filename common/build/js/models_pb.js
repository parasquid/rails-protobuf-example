/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const proto = $root.proto = (() => {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    const proto = {};

    proto.Articles = (function() {

        /**
         * Properties of an Articles.
         * @memberof proto
         * @interface IArticles
         * @property {Array.<proto.IArticle>|null} [articles] Articles articles
         */

        /**
         * Constructs a new Articles.
         * @memberof proto
         * @classdesc Represents an Articles.
         * @implements IArticles
         * @constructor
         * @param {proto.IArticles=} [properties] Properties to set
         */
        function Articles(properties) {
            this.articles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Articles articles.
         * @member {Array.<proto.IArticle>} articles
         * @memberof proto.Articles
         * @instance
         */
        Articles.prototype.articles = $util.emptyArray;

        /**
         * Creates a new Articles instance using the specified properties.
         * @function create
         * @memberof proto.Articles
         * @static
         * @param {proto.IArticles=} [properties] Properties to set
         * @returns {proto.Articles} Articles instance
         */
        Articles.create = function create(properties) {
            return new Articles(properties);
        };

        /**
         * Encodes the specified Articles message. Does not implicitly {@link proto.Articles.verify|verify} messages.
         * @function encode
         * @memberof proto.Articles
         * @static
         * @param {proto.IArticles} message Articles message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Articles.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.articles != null && message.articles.length)
                for (let i = 0; i < message.articles.length; ++i)
                    $root.proto.Article.encode(message.articles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Articles message, length delimited. Does not implicitly {@link proto.Articles.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Articles
         * @static
         * @param {proto.IArticles} message Articles message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Articles.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Articles message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Articles
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Articles} Articles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Articles.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Articles();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.articles && message.articles.length))
                            message.articles = [];
                        message.articles.push($root.proto.Article.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Articles message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Articles
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Articles} Articles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Articles.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Articles message.
         * @function verify
         * @memberof proto.Articles
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Articles.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.articles != null && message.hasOwnProperty("articles")) {
                if (!Array.isArray(message.articles))
                    return "articles: array expected";
                for (let i = 0; i < message.articles.length; ++i) {
                    let error = $root.proto.Article.verify(message.articles[i]);
                    if (error)
                        return "articles." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Articles message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Articles
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Articles} Articles
         */
        Articles.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Articles)
                return object;
            let message = new $root.proto.Articles();
            if (object.articles) {
                if (!Array.isArray(object.articles))
                    throw TypeError(".proto.Articles.articles: array expected");
                message.articles = [];
                for (let i = 0; i < object.articles.length; ++i) {
                    if (typeof object.articles[i] !== "object")
                        throw TypeError(".proto.Articles.articles: object expected");
                    message.articles[i] = $root.proto.Article.fromObject(object.articles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Articles message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Articles
         * @static
         * @param {proto.Articles} message Articles
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Articles.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.articles = [];
            if (message.articles && message.articles.length) {
                object.articles = [];
                for (let j = 0; j < message.articles.length; ++j)
                    object.articles[j] = $root.proto.Article.toObject(message.articles[j], options);
            }
            return object;
        };

        /**
         * Converts this Articles to JSON.
         * @function toJSON
         * @memberof proto.Articles
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Articles.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Articles
         * @function getTypeUrl
         * @memberof proto.Articles
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Articles.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Articles";
        };

        return Articles;
    })();

    proto.Article = (function() {

        /**
         * Properties of an Article.
         * @memberof proto
         * @interface IArticle
         * @property {string|null} [title] Article title
         * @property {string|null} [body] Article body
         * @property {Array.<proto.IComment>|null} [comments] Article comments
         */

        /**
         * Constructs a new Article.
         * @memberof proto
         * @classdesc Represents an Article.
         * @implements IArticle
         * @constructor
         * @param {proto.IArticle=} [properties] Properties to set
         */
        function Article(properties) {
            this.comments = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Article title.
         * @member {string} title
         * @memberof proto.Article
         * @instance
         */
        Article.prototype.title = "";

        /**
         * Article body.
         * @member {string} body
         * @memberof proto.Article
         * @instance
         */
        Article.prototype.body = "";

        /**
         * Article comments.
         * @member {Array.<proto.IComment>} comments
         * @memberof proto.Article
         * @instance
         */
        Article.prototype.comments = $util.emptyArray;

        /**
         * Creates a new Article instance using the specified properties.
         * @function create
         * @memberof proto.Article
         * @static
         * @param {proto.IArticle=} [properties] Properties to set
         * @returns {proto.Article} Article instance
         */
        Article.create = function create(properties) {
            return new Article(properties);
        };

        /**
         * Encodes the specified Article message. Does not implicitly {@link proto.Article.verify|verify} messages.
         * @function encode
         * @memberof proto.Article
         * @static
         * @param {proto.IArticle} message Article message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Article.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.body);
            if (message.comments != null && message.comments.length)
                for (let i = 0; i < message.comments.length; ++i)
                    $root.proto.Comment.encode(message.comments[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Article message, length delimited. Does not implicitly {@link proto.Article.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Article
         * @static
         * @param {proto.IArticle} message Article message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Article.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Article message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Article
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Article} Article
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Article.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Article();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.title = reader.string();
                        break;
                    }
                case 2: {
                        message.body = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.comments && message.comments.length))
                            message.comments = [];
                        message.comments.push($root.proto.Comment.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Article message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Article
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Article} Article
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Article.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Article message.
         * @function verify
         * @memberof proto.Article
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Article.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            if (message.comments != null && message.hasOwnProperty("comments")) {
                if (!Array.isArray(message.comments))
                    return "comments: array expected";
                for (let i = 0; i < message.comments.length; ++i) {
                    let error = $root.proto.Comment.verify(message.comments[i]);
                    if (error)
                        return "comments." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Article message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Article
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Article} Article
         */
        Article.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Article)
                return object;
            let message = new $root.proto.Article();
            if (object.title != null)
                message.title = String(object.title);
            if (object.body != null)
                message.body = String(object.body);
            if (object.comments) {
                if (!Array.isArray(object.comments))
                    throw TypeError(".proto.Article.comments: array expected");
                message.comments = [];
                for (let i = 0; i < object.comments.length; ++i) {
                    if (typeof object.comments[i] !== "object")
                        throw TypeError(".proto.Article.comments: object expected");
                    message.comments[i] = $root.proto.Comment.fromObject(object.comments[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Article message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Article
         * @static
         * @param {proto.Article} message Article
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Article.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.comments = [];
            if (options.defaults) {
                object.title = "";
                object.body = "";
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            if (message.comments && message.comments.length) {
                object.comments = [];
                for (let j = 0; j < message.comments.length; ++j)
                    object.comments[j] = $root.proto.Comment.toObject(message.comments[j], options);
            }
            return object;
        };

        /**
         * Converts this Article to JSON.
         * @function toJSON
         * @memberof proto.Article
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Article.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Article
         * @function getTypeUrl
         * @memberof proto.Article
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Article.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Article";
        };

        return Article;
    })();

    proto.Comment = (function() {

        /**
         * Properties of a Comment.
         * @memberof proto
         * @interface IComment
         * @property {string|null} [articleId] Comment articleId
         * @property {string|null} [commenter] Comment commenter
         * @property {string|null} [body] Comment body
         */

        /**
         * Constructs a new Comment.
         * @memberof proto
         * @classdesc Represents a Comment.
         * @implements IComment
         * @constructor
         * @param {proto.IComment=} [properties] Properties to set
         */
        function Comment(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Comment articleId.
         * @member {string} articleId
         * @memberof proto.Comment
         * @instance
         */
        Comment.prototype.articleId = "";

        /**
         * Comment commenter.
         * @member {string} commenter
         * @memberof proto.Comment
         * @instance
         */
        Comment.prototype.commenter = "";

        /**
         * Comment body.
         * @member {string} body
         * @memberof proto.Comment
         * @instance
         */
        Comment.prototype.body = "";

        /**
         * Creates a new Comment instance using the specified properties.
         * @function create
         * @memberof proto.Comment
         * @static
         * @param {proto.IComment=} [properties] Properties to set
         * @returns {proto.Comment} Comment instance
         */
        Comment.create = function create(properties) {
            return new Comment(properties);
        };

        /**
         * Encodes the specified Comment message. Does not implicitly {@link proto.Comment.verify|verify} messages.
         * @function encode
         * @memberof proto.Comment
         * @static
         * @param {proto.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.articleId != null && Object.hasOwnProperty.call(message, "articleId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.articleId);
            if (message.commenter != null && Object.hasOwnProperty.call(message, "commenter"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.commenter);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.body);
            return writer;
        };

        /**
         * Encodes the specified Comment message, length delimited. Does not implicitly {@link proto.Comment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Comment
         * @static
         * @param {proto.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Comment message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Comment();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.articleId = reader.string();
                        break;
                    }
                case 2: {
                        message.commenter = reader.string();
                        break;
                    }
                case 3: {
                        message.body = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Comment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Comment message.
         * @function verify
         * @memberof proto.Comment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Comment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.articleId != null && message.hasOwnProperty("articleId"))
                if (!$util.isString(message.articleId))
                    return "articleId: string expected";
            if (message.commenter != null && message.hasOwnProperty("commenter"))
                if (!$util.isString(message.commenter))
                    return "commenter: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            return null;
        };

        /**
         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Comment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Comment} Comment
         */
        Comment.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Comment)
                return object;
            let message = new $root.proto.Comment();
            if (object.articleId != null)
                message.articleId = String(object.articleId);
            if (object.commenter != null)
                message.commenter = String(object.commenter);
            if (object.body != null)
                message.body = String(object.body);
            return message;
        };

        /**
         * Creates a plain object from a Comment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Comment
         * @static
         * @param {proto.Comment} message Comment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Comment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.articleId = "";
                object.commenter = "";
                object.body = "";
            }
            if (message.articleId != null && message.hasOwnProperty("articleId"))
                object.articleId = message.articleId;
            if (message.commenter != null && message.hasOwnProperty("commenter"))
                object.commenter = message.commenter;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            return object;
        };

        /**
         * Converts this Comment to JSON.
         * @function toJSON
         * @memberof proto.Comment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Comment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Comment
         * @function getTypeUrl
         * @memberof proto.Comment
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Comment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Comment";
        };

        return Comment;
    })();

    return proto;
})();

export { $root as default };
