import { useState } from "react";
import axios from "axios";

import ClickSpark from "./components/ClickSpark";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import {
  Waves,
  ShieldCheck,
  Activity,
  Cpu,
} from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    Pclass: 3,
    Sex: "male",
    Age: 22,
    SibSp: 0,
    Parch: 0,
    Fare: 7.25,
    Embarked: "S",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateField = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const predictSurvival = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/predict`,
        formData
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  const probability = result
    ? Math.round(result.survival_probability * 100)
    : 0;

  return (
    <ClickSpark
      sparkColor="#7dd3fc"
      sparkSize={10}
      sparkRadius={18}
      sparkCount={8}
      duration={500}
    >
      <div className="relative h-screen overflow-hidden bg-[#020617] text-white">

        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),linear-gradient(to_bottom_right,_#020617,_#0f172a,_#111827)]" />

        <div className="absolute left-[-6rem] top-[-5rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        {/* MAIN */}

        <div className="relative z-10 flex h-full items-center justify-center p-6">

          <div className="grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">

            {/* LEFT PANEL */}

            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">

              <CardContent className="flex h-full flex-col justify-between p-8">

                <div>

                  <Badge className="mb-5 bg-cyan-500/20 text-cyan-200 border-cyan-400/20">
                    Titanic ML Dashboard
                  </Badge>

                  <h1 className="text-5xl font-bold leading-tight">
                    🚢 Titanic
                    <br />
                    Survival Predictor
                  </h1>

                  <p className="mt-5 max-w-lg text-slate-300">
                    Predict passenger survival probability using
                    a trained Random Forest machine learning model.
                  </p>

                </div>

                <div className="grid grid-cols-3 gap-4">

                  <Card className="border-white/10 bg-slate-950/40">
                    <CardContent className="p-4">
                      <Cpu className="mb-2 h-5 w-5 text-cyan-300" />
                      <p className="text-xs text-slate-400">
                        Model
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        Random Forest
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-white/10 bg-slate-950/40">
                    <CardContent className="p-4">
                      <Activity className="mb-2 h-5 w-5 text-cyan-300" />
                      <p className="text-xs text-slate-400">
                        Backend
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        FastAPI
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-white/10 bg-slate-950/40">
                    <CardContent className="p-4">
                      <Waves className="mb-2 h-5 w-5 text-cyan-300" />
                      <p className="text-xs text-slate-400">
                        Frontend
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        React + shadcn
                      </p>
                    </CardContent>
                  </Card>

                </div>

              </CardContent>

            </Card>

            {/* RIGHT PANEL */}

            <Card className="border-white/10 bg-slate-950/50 backdrop-blur-xl">

              <CardContent className="p-8">

                <div className="mb-6 flex items-center justify-between">

                  <div>
                    <h2 className="text-2xl font-bold">
                      Passenger Details
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      Enter passenger information
                    </p>
                  </div>

                  <Badge variant="secondary">
                    Live Prediction
                  </Badge>

                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  {/* CLASS */}

                  <div className="space-y-2">
                    <Label>Passenger Class</Label>

                    <Select
                      onValueChange={(value) =>
                        updateField("Pclass", parseInt(value))
                      }
                      defaultValue="3"
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="1">
                          1st Class
                        </SelectItem>

                        <SelectItem value="2">
                          2nd Class
                        </SelectItem>

                        <SelectItem value="3">
                          3rd Class
                        </SelectItem>
                      </SelectContent>

                    </Select>
                  </div>

                  {/* SEX */}

                  <div className="space-y-2">
                    <Label>Sex</Label>

                    <Select
                      onValueChange={(value) =>
                        updateField("Sex", value)
                      }
                      defaultValue="male"
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="male">
                          Male
                        </SelectItem>

                        <SelectItem value="female">
                          Female
                        </SelectItem>
                      </SelectContent>

                    </Select>
                  </div>

                  {/* AGE */}

                  <div className="space-y-2">
                    <Label>Age</Label>

                    <Input
                      type="number"
                      value={formData.Age}
                      onChange={(e) =>
                        updateField(
                          "Age",
                          parseFloat(e.target.value)
                        )
                      }
                    />
                  </div>

                  {/* FARE */}

                  <div className="space-y-2">
                    <Label>Fare</Label>

                    <Input
                      type="number"
                      value={formData.Fare}
                      onChange={(e) =>
                        updateField(
                          "Fare",
                          parseFloat(e.target.value)
                        )
                      }
                    />
                  </div>

                  {/* SIBSP */}

                  <div className="space-y-2">
                    <Label>Siblings / Spouse</Label>

                    <Input
                      type="number"
                      value={formData.SibSp}
                      onChange={(e) =>
                        updateField(
                          "SibSp",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </div>

                  {/* PARCH */}

                  <div className="space-y-2">
                    <Label>Parents / Children</Label>

                    <Input
                      type="number"
                      value={formData.Parch}
                      onChange={(e) =>
                        updateField(
                          "Parch",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </div>

                  {/* EMBARKED */}

                  <div className="space-y-2 sm:col-span-2">
                    <Label>Embarked</Label>

                    <Select
                      onValueChange={(value) =>
                        updateField("Embarked", value)
                      }
                      defaultValue="S"
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="S">
                          Southampton
                        </SelectItem>

                        <SelectItem value="C">
                          Cherbourg
                        </SelectItem>

                        <SelectItem value="Q">
                          Queenstown
                        </SelectItem>
                      </SelectContent>

                    </Select>
                  </div>

                </div>

                <Button
                  className="mt-6 h-12 w-full bg-cyan-500 hover:bg-cyan-400"
                  onClick={predictSurvival}
                  disabled={loading}
                >
                  {loading
                    ? "Predicting..."
                    : "Predict Survival"}
                </Button>

                {result && (

                  <Card className="mt-6 border-white/10 bg-white/5">

                    <CardContent className="p-5">

                      <div className="mb-4 flex items-center justify-between">

                        <div>

                          <p className="text-xs uppercase tracking-widest text-slate-400">
                            Prediction Result
                          </p>

                          <h3
                            className={`mt-2 text-2xl font-bold ${
                              result.prediction === 1
                                ? "text-emerald-400"
                                : "text-rose-400"
                            }`}
                          >
                            {result.prediction === 1
                              ? "✅ Survived"
                              : "❌ Did Not Survive"}
                          </h3>

                        </div>

                        <ShieldCheck className="h-10 w-10 text-cyan-300" />

                      </div>

                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-slate-400">
                          Survival Probability
                        </span>

                        <span className="font-semibold">
                          {probability}%
                        </span>
                      </div>

                      <Progress value={probability} />

                    </CardContent>

                  </Card>

                )}

              </CardContent>

            </Card>

          </div>

        </div>

      </div>
    </ClickSpark>
  );
}

export default App;