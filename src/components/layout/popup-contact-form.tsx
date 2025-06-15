"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ServiceType {
  id: string;
  label: string;
}

interface ServiceConfig {
  [key: string]: {
    label: string;
    subServices: ServiceType[];
  };
}

interface FormServices {
  isolatie: boolean;
  isolatieType: {
    gevelisolatie: boolean;
    dakisolatie: boolean;
    vloerisolatie: boolean;
  };
  ventilatie: boolean;
  ventilatieType: {
    wtwSystemen: boolean;
    mechanischeVentilatie: boolean;
  };
  energiesystemen: boolean;
  energieType: {
    warmtepompen: boolean;
    hrKetels: boolean;
  };
  glasisolatie: boolean;
  glasType: {
    hrPlusPlus: boolean;
    tripleGlas: boolean;
  };
  [key: string]: boolean | Record<string, boolean>;
}

interface FormData {
  // Step 1 - Service Selection
  serviceTypes: {
    energielabel: boolean;
    nen2580: boolean;
    wwsPunten: boolean;
    duurzaamheidsadvies: boolean;
    isolatieadvies: boolean;
    verkoopklaar: boolean;
  };
  
  // Step 2 - Property Details
  address: string;
  houseType: string;
  surfaceArea: string;
  constructionYear: string;
  recentlyRenovated: "ja" | "nee" | "";
  
  // Step 3 - Property Condition
  insulationDetails: string;
  sustainableInstallations: string;
  
  // Step 4 - Project Details
  purpose: "verkoop" | "verhuur" | "";
  subsidyRequest: "ja" | "nee" | "";
  deadline: "standaard" | "spoed" | "";
  
  // Step 5 - Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContactTime: string;
  additionalDocuments?: FileList;
}

const initialFormData: FormData = {
  serviceTypes: {
    energielabel: false,
    nen2580: false,
    wwsPunten: false,
    duurzaamheidsadvies: false,
    isolatieadvies: false,
    verkoopklaar: false,
  },
  address: "",
  houseType: "",
  surfaceArea: "",
  constructionYear: "",
  recentlyRenovated: "",
  insulationDetails: "",
  sustainableInstallations: "",
  purpose: "",
  subsidyRequest: "",
  deadline: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredContactTime: "",
};

const steps = [
  {
    id: "services",
    title: "Welke diensten wenst u af te nemen?",
  },
  {
    id: "property",
    title: "Gegevens van de woning",
  },
  {
    id: "condition",
    title: "Huidige staat van de woning",
  },
  {
    id: "project",
    title: "Project details",
  },
  {
    id: "personal",
    title: "Uw contactgegevens",
  },
];

const houseTypes = [
  { id: "hoekwoning", label: "Hoekwoning" },
  { id: "tussenwoning", label: "Tussenwoning" },
  { id: "vrijstaande", label: "Vrijstaande woning" },
  { id: "twee-onder-een-kap", label: "Twee-onder-één-kap woning" },
];

interface FormErrors {
  services?: string;
  address?: string;
  houseType?: string;
  surfaceArea?: string;
  constructionYear?: string;
  recentlyRenovated?: string;
  insulationDetails?: string;
  sustainableInstallations?: string;
  purpose?: string;
  subsidyRequest?: string;
  deadline?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  preferredContactTime?: string;
}

// Update service configuration
const serviceConfig = {
  energielabel: { label: "Energielabel voor woning" },
  nen2580: { label: "NEN 2580 meetrapport" },
  wwsPunten: { label: "WWS puntentelling" },
  duurzaamheidsadvies: { label: "Duurzaamheidsadvies voor woning" },
  isolatieadvies: { label: "Isolatieadvies" },
  verkoopklaar: { label: "Verkoopklaar maken woning" },
} as const;

interface PopUpContactSectionProps {
  isPopup?: boolean;
  onSubmitSuccess?: () => void;
}

export function PopUpContactSection({
  isPopup,
  onSubmitSuccess,
}: PopUpContactSectionProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      // Validate required fields
      if (currentStep === 2) {
        if (
          !formData.firstName ||
          !formData.lastName ||
          !formData.email ||
          !formData.phone
        ) {
          toast.error("Vul alle verplichte velden in");
          return;
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      //   hiding the popup
      onSubmitSuccess?.(); //this is the function that will be called when the form is submitted

      // Redirect to thank you page instead of showing toast
      router.push("/thank-you");

      setFormData(initialFormData);
      setCurrentStep(0);
    } catch (error) {
      toast.error("Er is iets misgegaan. Probeer het later opnieuw.");
    } finally {
      setIsLoading(false);
    }
  };

  const validateStep = () => {
    const newErrors: FormErrors = {};

    switch (currentStep) {
      case 0:
        if (!Object.values(formData.serviceTypes).some((value) => value)) {
          newErrors.services = "Selecteer minimaal één service";
        }
        break;
      case 1:
        if (!formData.address.trim()) newErrors.address = "Adres is verplicht";
        if (!formData.houseType.trim()) newErrors.houseType = "Type woning is verplicht";
        if (!formData.surfaceArea.trim()) newErrors.surfaceArea = "Oppervlakte is verplicht";
        if (!formData.constructionYear.trim()) newErrors.constructionYear = "Bouwjaar is verplicht";
        if (!formData.recentlyRenovated) newErrors.recentlyRenovated = "Selecteer of de woning recent gerenoveerd is";
        break;
      case 2:
        if (!formData.insulationDetails.trim()) newErrors.insulationDetails = "Beschrijf de huidige isolatie";
        if (!formData.sustainableInstallations.trim()) newErrors.sustainableInstallations = "Beschrijf de duurzame installaties";
        break;
      case 3:
        if (!formData.purpose) newErrors.purpose = "Selecteer verkoop of verhuur";
        if (!formData.subsidyRequest) newErrors.subsidyRequest = "Selecteer of er een subsidievraag is";
        if (!formData.deadline) newErrors.deadline = "Selecteer een deadline";
        break;
      case 4:
        if (!formData.firstName.trim()) newErrors.firstName = "Voornaam is verplicht";
        if (!formData.lastName.trim()) newErrors.lastName = "Achternaam is verplicht";
        if (!formData.email.trim()) {
          newErrors.email = "Email is verplicht";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Voer een geldig emailadres in";
        }
        if (!formData.phone.trim()) newErrors.phone = "Telefoonnummer is verplicht";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (!validateStep()) return;

    if (currentStep === steps.length - 1) {
      handleSubmit();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            {Object.entries(serviceConfig).map(([serviceKey, serviceData]) => (
              <div key={serviceKey} className="space-y-3">
                <div className="block w-full rounded-lg border hover:border-primary/50">
                  <label className="flex items-center w-full p-4 cursor-pointer">
                    <div className="flex items-center gap-3 flex-1">
                      <input
                        type="checkbox"
                        checked={formData.serviceTypes[serviceKey as keyof typeof formData.serviceTypes]}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          setFormData((prev) => ({
                            ...prev,
                            serviceTypes: {
                              ...prev.serviceTypes,
                              [serviceKey]: isChecked,
                            },
                          }));
                        }}
                        className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="block text-lg font-medium">
                        {serviceData.label}
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            ))}
            {errors.services && (
              <p className="text-destructive text-sm mt-2">{errors.services}</p>
            )}
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Adres van de woning *</label>
              <Input
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className={errors.address ? "border-red-500" : ""}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Type woning *</label>
              <Input
                value={formData.houseType}
                onChange={(e) => setFormData({ ...formData, houseType: e.target.value })}
                className={errors.houseType ? "border-red-500" : ""}
              />
              {errors.houseType && (
                <p className="text-red-500 text-sm mt-1">{errors.houseType}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Oppervlakte woning (m²) *</label>
              <Input
                type="number"
                value={formData.surfaceArea}
                onChange={(e) => setFormData({ ...formData, surfaceArea: e.target.value })}
                className={errors.surfaceArea ? "border-red-500" : ""}
              />
              {errors.surfaceArea && (
                <p className="text-red-500 text-sm mt-1">{errors.surfaceArea}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Bouwjaar woning *</label>
              <Input
                type="number"
                value={formData.constructionYear}
                onChange={(e) => setFormData({ ...formData, constructionYear: e.target.value })}
                className={errors.constructionYear ? "border-red-500" : ""}
              />
              {errors.constructionYear && (
                <p className="text-red-500 text-sm mt-1">{errors.constructionYear}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Recent gerenoveerd? *</label>
              <select
                value={formData.recentlyRenovated}
                onChange={(e) => setFormData({ ...formData, recentlyRenovated: e.target.value as "ja" | "nee" | "" })}
                className={errors.recentlyRenovated ? "border-red-500" : ""}
              >
                <option value="">Selecteer</option>
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
              </select>
              {errors.recentlyRenovated && (
                <p className="text-red-500 text-sm mt-1">{errors.recentlyRenovated}</p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Isolatie aanwezig? *</label>
              <Textarea
                value={formData.insulationDetails}
                onChange={(e) => setFormData({ ...formData, insulationDetails: e.target.value })}
                className={errors.insulationDetails ? "border-red-500" : ""}
                placeholder="Beschrijf de huidige isolatie van uw woning"
              />
              {errors.insulationDetails && (
                <p className="text-red-500 text-sm mt-1">{errors.insulationDetails}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Duurzame installaties? *</label>
              <Textarea
                value={formData.sustainableInstallations}
                onChange={(e) => setFormData({ ...formData, sustainableInstallations: e.target.value })}
                className={errors.sustainableInstallations ? "border-red-500" : ""}
                placeholder="Beschrijf de duurzame installaties in uw woning"
              />
              {errors.sustainableInstallations && (
                <p className="text-red-500 text-sm mt-1">{errors.sustainableInstallations}</p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Verkoop of verhuur? *</label>
              <select
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value as "verkoop" | "verhuur" | "" })}
                className={errors.purpose ? "border-red-500" : ""}
              >
                <option value="">Selecteer</option>
                <option value="verkoop">Verkoop</option>
                <option value="verhuur">Verhuur</option>
              </select>
              {errors.purpose && (
                <p className="text-red-500 text-sm mt-1">{errors.purpose}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subsidievraag? *</label>
              <select
                value={formData.subsidyRequest}
                onChange={(e) => setFormData({ ...formData, subsidyRequest: e.target.value as "ja" | "nee" | "" })}
                className={errors.subsidyRequest ? "border-red-500" : ""}
              >
                <option value="">Selecteer</option>
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
              </select>
              {errors.subsidyRequest && (
                <p className="text-red-500 text-sm mt-1">{errors.subsidyRequest}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Deadline *</label>
              <select
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value as "standaard" | "spoed" | "" })}
                className={errors.deadline ? "border-red-500" : ""}
              >
                <option value="">Selecteer</option>
                <option value="standaard">Standaard levering (3-5 werkdagen)</option>
                <option value="spoed">Spoedaanvraag (1-2 werkdagen)</option>
              </select>
              {errors.deadline && (
                <p className="text-red-500 text-sm mt-1">{errors.deadline}</p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Voornaam *</label>
              <Input
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className={errors.firstName ? "border-red-500" : ""}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Achternaam *</label>
              <Input
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className={errors.lastName ? "border-red-500" : ""}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mailadres *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Telefoonnummer *</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Voorkeur voor contactmoment</label>
              <Input
                value={formData.preferredContactTime}
                onChange={(e) => setFormData({ ...formData, preferredContactTime: e.target.value })}
                placeholder="Bijv. 's ochtends tussen 9-12 uur"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Extra documenten (optioneel)</label>
              <Input
                type="file"
                onChange={(e) => setFormData({ ...formData, additionalDocuments: e.target.files || undefined })}
                multiple
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="contact" className="relative bg-background/50 px-4 py-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="order-1 md:order-2 w-full max-w-xl mx-auto lg:mx-0">
            <div className="bg-background rounded-xl shadow-lg p-8 border border-border relative">
              {/* Subsidy Badge */}
              {/* <div className="absolute -right-4 top-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-12">
                  <span className="text-sm font-medium">€ Subsidie mogelijk!</span>
                </div> */}

              {/* Main Title */}
              <h2 className="text-xl font-semibold text-center mb-6">
                Gratis offerte aanvragen voor de isolatie van uw woning
              </h2>

              {/* Step Indicators */}
              <div className="flex justify-between mb-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center
                        ${
                          index === currentStep
                            ? "bg-primary text-white"
                            : "bg-gray-200"
                        }
                      `}
                    >
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-medium mb-6">
                {steps[currentStep].title}
              </h3>

              {/* Form Content */}
              <form onSubmit={(e) => e.preventDefault()}>
                {renderStepContent()}

                <div className="mt-6 space-y-4">
                  <div className="flex gap-3">
                    {currentStep > 0 && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleBack}
                        disabled={isLoading}
                      >
                        Terug
                      </Button>
                    )}
                    <Button
                      className="w-full"
                      onClick={handleNext}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Verzenden...
                        </div>
                      ) : currentStep === steps.length - 1 ? (
                        "Aanvraag verzenden"
                      ) : (
                        "Volgende"
                      )}
                    </Button>
                  </div>

                  {/* Houses Count */}
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span>binnen 2 weken een startdatum</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
