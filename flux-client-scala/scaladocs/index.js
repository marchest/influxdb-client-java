Index.PACKAGES = {"org" : [], "org.influxdata" : [], "org.influxdata.flux" : [{"name" : "org.influxdata.flux.FluxClientScala", "members_trait" : [{"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "org\/influxdata\/flux\/FluxClientScala.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "org\/influxdata\/flux\/FluxClientScala.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "org\/influxdata\/flux\/FluxClientScala.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "org\/influxdata\/flux\/FluxClientScala.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "org\/influxdata\/flux\/FluxClientScala.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "org\/influxdata\/flux\/FluxClientScala.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "org\/influxdata\/flux\/FluxClientScala.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/influxdata\/flux\/FluxClientScala.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/influxdata\/flux\/FluxClientScala.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/influxdata\/flux\/FluxClientScala.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "org\/influxdata\/flux\/FluxClientScala.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "org\/influxdata\/flux\/FluxClientScala.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "org\/influxdata\/flux\/FluxClientScala.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "org\/influxdata\/flux\/FluxClientScala.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "org\/influxdata\/flux\/FluxClientScala.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "org\/influxdata\/flux\/FluxClientScala.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "org\/influxdata\/flux\/FluxClientScala.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "org\/influxdata\/flux\/FluxClientScala.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "org\/influxdata\/flux\/FluxClientScala.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}, {"label" : "close", "tail" : "(): Unit", "member" : "org.influxdata.flux.FluxClientScala.close", "link" : "org\/influxdata\/flux\/FluxClientScala.html#close():Unit", "kind" : "abstract def"}, {"label" : "setLogLevel", "tail" : "(logLevel: LogLevel): FluxClientScala", "member" : "org.influxdata.flux.FluxClientScala.setLogLevel", "link" : "org\/influxdata\/flux\/FluxClientScala.html#setLogLevel(logLevel:org.influxdata.platform.rest.LogLevel):org.influxdata.flux.FluxClientScala", "kind" : "abstract def"}, {"label" : "getLogLevel", "tail" : "(): LogLevel", "member" : "org.influxdata.flux.FluxClientScala.getLogLevel", "link" : "org\/influxdata\/flux\/FluxClientScala.html#getLogLevel:org.influxdata.platform.rest.LogLevel", "kind" : "abstract def"}, {"label" : "version", "tail" : "(): String", "member" : "org.influxdata.flux.FluxClientScala.version", "link" : "org\/influxdata\/flux\/FluxClientScala.html#version:String", "kind" : "abstract def"}, {"label" : "ping", "tail" : "(): Boolean", "member" : "org.influxdata.flux.FluxClientScala.ping", "link" : "org\/influxdata\/flux\/FluxClientScala.html#ping:Boolean", "kind" : "abstract def"}, {"label" : "queryRaw", "tail" : "(query: String, dialect: String): Source[String, NotUsed]", "member" : "org.influxdata.flux.FluxClientScala.queryRaw", "link" : "org\/influxdata\/flux\/FluxClientScala.html#queryRaw(query:String,dialect:String):akka.stream.scaladsl.Source[String,akka.NotUsed]", "kind" : "abstract def"}, {"label" : "queryRaw", "tail" : "(query: String): Source[String, NotUsed]", "member" : "org.influxdata.flux.FluxClientScala.queryRaw", "link" : "org\/influxdata\/flux\/FluxClientScala.html#queryRaw(query:String):akka.stream.scaladsl.Source[String,akka.NotUsed]", "kind" : "abstract def"}, {"label" : "query", "tail" : "(query: String, measurementType: Class[M]): Source[M, NotUsed]", "member" : "org.influxdata.flux.FluxClientScala.query", "link" : "org\/influxdata\/flux\/FluxClientScala.html#query[M](query:String,measurementType:Class[M]):akka.stream.scaladsl.Source[M,akka.NotUsed]", "kind" : "abstract def"}, {"label" : "query", "tail" : "(query: String): Source[FluxRecord, NotUsed]", "member" : "org.influxdata.flux.FluxClientScala.query", "link" : "org\/influxdata\/flux\/FluxClientScala.html#query(query:String):akka.stream.scaladsl.Source[org.influxdata.flux.domain.FluxRecord,akka.NotUsed]", "kind" : "abstract def"}], "shortDescription" : "The client that allows perform Flux queries against the InfluxDB \/api\/v2\/query endpoint.", "trait" : "org\/influxdata\/flux\/FluxClientScala.html", "kind" : "trait"}, {"name" : "org.influxdata.flux.FluxClientScalaFactory", "shortDescription" : "The Factory that creates a instance of a Flux client.", "object" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html", "members_object" : [{"label" : "create", "tail" : "(options: FluxConnectionOptions, bufferSize: Int, overflowStrategy: OverflowStrategy): FluxClientScala", "member" : "org.influxdata.flux.FluxClientScalaFactory.create", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#create(options:org.influxdata.flux.option.FluxConnectionOptions,bufferSize:Int,overflowStrategy:akka.stream.OverflowStrategy):org.influxdata.flux.FluxClientScala", "kind" : "def"}, {"label" : "create", "tail" : "(connectionString: String): FluxClientScala", "member" : "org.influxdata.flux.FluxClientScalaFactory.create", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#create(connectionString:String):org.influxdata.flux.FluxClientScala", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "org\/influxdata\/flux\/FluxClientScalaFactory$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "kind" : "object"}], "org.influxdata.flux.impl" : [{"name" : "org.influxdata.flux.impl.FluxClientScalaImpl", "shortDescription" : "", "members_class" : [{"label" : "setLogLevel", "tail" : "(logLevel: LogLevel): FluxClientScala", "member" : "org.influxdata.flux.impl.FluxClientScalaImpl.setLogLevel", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#setLogLevel(logLevel:org.influxdata.platform.rest.LogLevel):org.influxdata.flux.FluxClientScala", "kind" : "def"}, {"label" : "getLogLevel", "tail" : "(): LogLevel", "member" : "org.influxdata.flux.impl.FluxClientScalaImpl.getLogLevel", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#getLogLevel:org.influxdata.platform.rest.LogLevel", "kind" : "def"}, {"label" : "version", "tail" : "(): String", "member" : "org.influxdata.flux.impl.FluxClientScalaImpl.version", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#version:String", "kind" : "def"}, {"label" : "ping", "tail" : "(): Boolean", "member" : "org.influxdata.flux.impl.FluxClientScalaImpl.ping", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#ping:Boolean", "kind" : "def"}, {"label" : "queryRaw", "tail" : "(query: String, dialect: String): Source[String, NotUsed]", "member" : "org.influxdata.flux.impl.FluxClientScalaImpl.queryRaw", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#queryRaw(query:String,dialect:String):akka.stream.scaladsl.Source[String,akka.NotUsed]", "kind" : "def"}, {"label" : "queryRaw", "tail" : "(query: String): Source[String, NotUsed]", "member" : "org.influxdata.flux.impl.FluxClientScalaImpl.queryRaw", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#queryRaw(query:String):akka.stream.scaladsl.Source[String,akka.NotUsed]", "kind" : "def"}, {"label" : "query", "tail" : "(query: String, measurementType: Class[M]): Source[M, NotUsed]", "member" : "org.influxdata.flux.impl.FluxClientScalaImpl.query", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#query[M](query:String,measurementType:Class[M]):akka.stream.scaladsl.Source[M,akka.NotUsed]", "kind" : "def"}, {"label" : "query", "tail" : "(query: String): Source[FluxRecord, NotUsed]", "member" : "org.influxdata.flux.impl.FluxClientScalaImpl.query", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#query(query:String):akka.stream.scaladsl.Source[org.influxdata.flux.domain.FluxRecord,akka.NotUsed]", "kind" : "def"}, {"member" : "org.influxdata.flux.impl.FluxClientScalaImpl#<init>", "error" : "unsupported entity"}, {"label" : "overflowStrategy", "tail" : ": OverflowStrategy", "member" : "org.influxdata.flux.impl.FluxClientScalaImpl.overflowStrategy", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#overflowStrategy:akka.stream.OverflowStrategy", "kind" : "val"}, {"label" : "bufferSize", "tail" : ": Int", "member" : "org.influxdata.flux.impl.FluxClientScalaImpl.bufferSize", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#bufferSize:Int", "kind" : "val"}, {"label" : "close", "tail" : "(): Unit", "member" : "org.influxdata.flux.impl.AbstractFluxClient.close", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#close():Unit", "kind" : "def"}, {"label" : "configure", "tail" : "(arg0: Builder): Unit", "member" : "org.influxdata.flux.impl.AbstractFluxClient.configure", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#configure(x$1:retrofit2.Retrofit.Builder):Unit", "kind" : "def"}, {"label" : "query", "tail" : "(arg0: Call[ResponseBody], arg1: BiConsumer[Cancellable, BufferedSource], arg2: Consumer[_ >: Throwable], arg3: Runnable, arg4: Boolean): Unit", "member" : "org.influxdata.platform.rest.AbstractQueryClient.query", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#query(x$1:retrofit2.Call[okhttp3.ResponseBody],x$2:java.util.function.BiConsumer[org.influxdata.platform.rest.Cancellable,okio.BufferedSource],x$3:java.util.function.Consumer[_>:Throwable],x$4:Runnable,x$5:Boolean):Unit", "kind" : "def"}, {"label" : "queryRaw", "tail" : "(arg0: Call[ResponseBody], arg1: BiConsumer[Cancellable, String], arg2: Consumer[_ >: Throwable], arg3: Runnable, arg4: Boolean): Unit", "member" : "org.influxdata.platform.rest.AbstractQueryClient.queryRaw", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#queryRaw(x$1:retrofit2.Call[okhttp3.ResponseBody],x$2:java.util.function.BiConsumer[org.influxdata.platform.rest.Cancellable,String],x$3:java.util.function.Consumer[_>:Throwable],x$4:Runnable,x$5:Boolean):Unit", "kind" : "def"}, {"label" : "query", "tail" : "(arg0: Call[ResponseBody], arg1: FluxResponseConsumer, arg2: Consumer[_ >: Throwable], arg3: Runnable, arg4: Boolean): Unit", "member" : "org.influxdata.platform.rest.AbstractQueryClient.query", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#query(x$1:retrofit2.Call[okhttp3.ResponseBody],x$2:org.influxdata.flux.impl.FluxCsvParser.FluxResponseConsumer,x$3:java.util.function.Consumer[_>:Throwable],x$4:Runnable,x$5:Boolean):Unit", "kind" : "def"}, {"label" : "createBody", "tail" : "(arg0: String, arg1: String): RequestBody", "member" : "org.influxdata.platform.rest.AbstractQueryClient.createBody", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#createBody(x$1:String,x$2:String):okhttp3.RequestBody", "kind" : "def"}, {"label" : "getLogLevel", "tail" : "(arg0: HttpLoggingInterceptor): LogLevel", "member" : "org.influxdata.platform.rest.AbstractRestClient.getLogLevel", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#getLogLevel(x$1:okhttp3.logging.HttpLoggingInterceptor):org.influxdata.platform.rest.LogLevel", "kind" : "def"}, {"label" : "setLogLevel", "tail" : "(arg0: HttpLoggingInterceptor, arg1: LogLevel): Unit", "member" : "org.influxdata.platform.rest.AbstractRestClient.setLogLevel", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#setLogLevel(x$1:okhttp3.logging.HttpLoggingInterceptor,x$2:org.influxdata.platform.rest.LogLevel):Unit", "kind" : "def"}, {"label" : "isCloseException", "tail" : "(arg0: Exception): Boolean", "member" : "org.influxdata.platform.rest.AbstractRestClient.isCloseException", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#isCloseException(x$1:Exception):Boolean", "kind" : "def"}, {"label" : "catchOrPropagateException", "tail" : "(arg0: Exception, arg1: Consumer[_ >: Throwable]): Unit", "member" : "org.influxdata.platform.rest.AbstractRestClient.catchOrPropagateException", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#catchOrPropagateException(x$1:Exception,x$2:java.util.function.Consumer[_>:Throwable]):Unit", "kind" : "def"}, {"label" : "execute", "tail" : "(arg0: Call[T], arg1: Class[E]): T", "member" : "org.influxdata.platform.rest.AbstractRestClient.execute", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#execute[T,E<:org.influxdata.platform.error.InfluxException](x$1:retrofit2.Call[T],x$2:Class[E]):T", "kind" : "def"}, {"label" : "execute", "tail" : "(arg0: Call[T], arg1: String): T", "member" : "org.influxdata.platform.rest.AbstractRestClient.execute", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#execute[T](x$1:retrofit2.Call[T],x$2:String):T", "kind" : "def"}, {"label" : "execute", "tail" : "(arg0: Call[T]): T", "member" : "org.influxdata.platform.rest.AbstractRestClient.execute", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#execute[T](x$1:retrofit2.Call[T]):T", "kind" : "def"}, {"label" : "createBody", "tail" : "(arg0: String): RequestBody", "member" : "org.influxdata.platform.rest.AbstractRestClient.createBody", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#createBody(x$1:String):okhttp3.RequestBody", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "class" : "org\/influxdata\/flux\/impl\/FluxClientScalaImpl.html", "kind" : "class"}]};