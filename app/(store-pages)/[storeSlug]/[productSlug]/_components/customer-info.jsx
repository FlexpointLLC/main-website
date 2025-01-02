import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CustomerInfo = ({ formik, fields }) => {
  const { handleChange, values, errors, touched } = formik;

  return (
    <div className="flex flex-col gap-4 py-6">
      {fields.map((field, index) => {
        const lowerCaseName = field.name.toLowerCase();
        return (
          <div key={index} className="flex flex-col gap-1">
            <Label htmlFor={lowerCaseName}>
              <span>{field.name}</span>
              {field.is_required ? (
                <span className="text-[#2547D0]"> *</span>
              ) : null}
            </Label>
            <Input
              type={field.type}
              id={lowerCaseName}
              name={lowerCaseName}
              value={values[lowerCaseName]}
              onChange={handleChange}
              className="rounded-lg bg-white"
            />

            {touched[lowerCaseName] && errors[lowerCaseName] ? (
              <p className="text-xs font-medium text-red-400">
                {errors[lowerCaseName]}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default CustomerInfo;
