import React from 'react'
import { useComponentContext } from '@/context/ComponentContext';
import Properties from './Properties';
import { renderProptiyFields } from '@/lib/RenderFields';


const PropertyPanel = () => {
    const { selectedComponent } = useComponentContext();
  return (
      <section className="bg-gray-500 w-3/12 flex overflow-scroll">
          {selectedComponent ? (
              <Properties
                  component={selectedComponent}
                  fields={renderProptiyFields(selectedComponent)}
              />
          ) : (
              <p className="my-auto text-center font-bold text-lg mx-10 text-white">
                  Select any component to edit it's Properties
              </p>
          )}
      </section>
  )
}

export default PropertyPanel