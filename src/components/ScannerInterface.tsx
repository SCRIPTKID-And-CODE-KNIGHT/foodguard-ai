import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Scan, 
  Wifi, 
  Activity, 
  CheckCircle, 
  AlertCircle, 
  XCircle,
  Loader2 
} from "lucide-react";
import scannerImage from "@/assets/scanner-device.jpg";

type ScanStatus = "idle" | "connect-prompt" | "connecting" | "waiting-scan" | "scanning" | "sending-data" | "processing" | "complete";
type ResultType = "safe" | "warning" | "danger";

interface ScanResult {
  status: ResultType;
  confidence: number;
  details: string;
  recommendations: string[];
}

const ScannerInterface = () => {
  const [scanStatus, setScanStatus] = useState<ScanStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<ScanResult | null>(null);

  const startScan = async () => {
    setScanStatus("connect-prompt");
    setProgress(0);
    setResult(null);
  };

  const connectScanner = async () => {
    setScanStatus("connecting");
    
    // Simulate device connection
    await new Promise(resolve => setTimeout(resolve, 2000));
    setProgress(15);
    
    setScanStatus("waiting-scan");
    await new Promise(resolve => setTimeout(resolve, 3000));
    setProgress(40);
    
    setScanStatus("scanning");
    await new Promise(resolve => setTimeout(resolve, 2500));
    setProgress(65);
    
    setScanStatus("sending-data");
    await new Promise(resolve => setTimeout(resolve, 1500));
    setProgress(85);
    
    setScanStatus("processing");
    await new Promise(resolve => setTimeout(resolve, 2000));
    setProgress(95);
    
    // Simulate random result
    const results: ScanResult[] = [
      {
        status: "safe",
        confidence: 96,
        details: "No harmful bacteria detected. Sample appears safe for consumption.",
        recommendations: ["Store in refrigerated conditions", "Consume within recommended timeframe"]
      },
      {
        status: "warning",
        confidence: 78,
        details: "Moderate bacterial presence detected. Exercise caution.",
        recommendations: ["Cook thoroughly before consumption", "Do not consume raw", "Check expiration date"]
      },
      {
        status: "danger",
        confidence: 92,
        details: "High levels of harmful bacteria detected. Do not consume.",
        recommendations: ["Dispose of item immediately", "Clean preparation surfaces", "Wash hands thoroughly"]
      }
    ];
    
    const randomResult = results[Math.floor(Math.random() * results.length)];
    setResult(randomResult);
    setProgress(100);
    setScanStatus("complete");
  };

  const resetScan = () => {
    setScanStatus("idle");
    setProgress(0);
    setResult(null);
  };

  const getStatusIcon = () => {
    switch (scanStatus) {
      case "connect-prompt":
        return <Wifi className="h-5 w-5" />;
      case "connecting":
        return <Wifi className="h-5 w-5 animate-pulse" />;
      case "waiting-scan":
        return <Scan className="h-5 w-5 animate-pulse" />;
      case "scanning":
        return <Scan className="h-5 w-5 animate-scan-pulse" />;
      case "sending-data":
        return <Activity className="h-5 w-5 animate-pulse" />;
      case "processing":
        return <Loader2 className="h-5 w-5 animate-spin" />;
      case "complete":
        return <Activity className="h-5 w-5" />;
      default:
        return <Scan className="h-5 w-5" />;
    }
  };

  const getResultIcon = (status: ResultType) => {
    switch (status) {
      case "safe":
        return <CheckCircle className="h-6 w-6 text-success" />;
      case "warning":
        return <AlertCircle className="h-6 w-6 text-warning" />;
      case "danger":
        return <XCircle className="h-6 w-6 text-danger" />;
    }
  };

  const getResultVariant = (status: ResultType) => {
    switch (status) {
      case "safe":
        return "success";
      case "warning":
        return "warning";
      case "danger":
        return "danger";
    }
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Bacteria Detection Scanner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect your scanner device and analyze food samples for bacterial contamination in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Scanner Device */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {getStatusIcon()}
                <span>Scanner Device</span>
              </CardTitle>
              <CardDescription>
                {scanStatus === "idle" && "Ready to scan"}
                {scanStatus === "connect-prompt" && "Connect your external scanner"}
                {scanStatus === "connecting" && "Connecting to scanner device..."}
                {scanStatus === "waiting-scan" && "Waiting for scanner to finish..."}
                {scanStatus === "scanning" && "Scanner is analyzing sample..."}
                {scanStatus === "sending-data" && "Sending data to backend..."}
                {scanStatus === "processing" && "AI processing results..."}
                {scanStatus === "complete" && "Scan complete"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-6">
                <img 
                  src={scannerImage} 
                  alt="Bacteria Detection Scanner" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                {scanStatus !== "idle" && (
                  <div className="absolute inset-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="animate-medical-glow">
                      {getStatusIcon()}
                    </div>
                  </div>
                )}
              </div>
              
              {scanStatus !== "idle" && (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                </div>
              )}
              
              <div className="flex space-x-3 mt-6">
                {scanStatus === "idle" && (
                  <Button 
                    variant="scan" 
                    size="lg" 
                    onClick={startScan}
                    className="flex-1"
                  >
                    <Scan className="h-5 w-5 mr-2" />
                    Start Scan
                  </Button>
                )}
                
                {scanStatus === "connect-prompt" && (
                  <div className="flex-1 space-y-3">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-3">
                        Please connect your external scanner device and ensure it's ready.
                      </p>
                      <Button 
                        variant="medical" 
                        size="lg" 
                        onClick={connectScanner}
                        className="w-full"
                      >
                        <Wifi className="h-5 w-5 mr-2" />
                        Connect Scanner
                      </Button>
                    </div>
                  </div>
                )}
                
                {scanStatus === "complete" && (
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={resetScan}
                    className="flex-1"
                  >
                    New Scan
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Scan Results</CardTitle>
              <CardDescription>
                Real-time analysis of bacterial contamination levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!result ? (
                <div className="text-center py-12">
                  <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No scan results yet. Start a scan to see analysis.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    {getResultIcon(result.status)}
                    <div>
                      <h3 className="font-semibold text-lg capitalize">
                        {result.status}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Confidence: {result.confidence}%
                      </p>
                    </div>
                    <Badge variant={getResultVariant(result.status) as any} className="ml-auto">
                      {result.status.toUpperCase()}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Analysis Details</h4>
                    <p className="text-sm text-muted-foreground">
                      {result.details}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Recommendations</h4>
                    <ul className="space-y-1">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScannerInterface;