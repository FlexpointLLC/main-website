import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CustomerInfo = ({ formik, fields }) => {
  const { handleChange, values, errors, touched } = formik;

  return (
    <div className="flex flex-col gap-4 py-6">
      {fields.map((field, index) => (
        <div key={index} className="flex flex-col gap-1">
          <Label
            htmlFor={field.name}
            className="text-lg font-medium text-heading"
          >
            <span>{field.name}</span>
            {field.is_required ? (
              <span className="text-[#2547D0]">*</span>
            ) : null}
          </Label>
          <Input
            type={field.type}
            id={field.name}
            name={field.name}
            value={values[field.name]}
            onChange={handleChange}
            className="rounded-lg bg-white"
          />

          {touched[field.name] && errors[field.name] ? (
            <p className="text-xs font-medium text-red-400">
              {errors[field.name]}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default CustomerInfo;
