import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import TeamCard from "components/TeamCard";
import { SectionType } from "types/index";
import {
  selectEmployees,
  selectEmployeesCount,
} from "store/selectors/selectors";
import { RootState } from "store/index";
import { handleIncreaseEmployeeCountToShow } from "store/actions/actionCreators";

const TeamSection = () => {
  const employeeList = useSelector((state: RootState) =>
    selectEmployees(state),
  );

  const employeesTotalCount = useSelector((state: RootState) =>
    selectEmployeesCount(state),
  );

  const dispatch = useDispatch();

  const [lastElement, setLastElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        dispatch(handleIncreaseEmployeeCountToShow());
      }
    }),
  );

  useEffect(() => {
    const currentObserver = observer.current;

    if (lastElement) {
      currentObserver.observe(lastElement);
    }

    return () => {
      if (lastElement) {
        currentObserver.unobserve(lastElement);
      }
    };
  }, [lastElement]);

  return (
    <Section type={SectionType.Narrow} marginTop={240} marginBottom={120}>
      <Flex flexWrap columnGap={20} rowGap={30} justify="start">
        {employeeList.map(({ id, imgUrl, name, position }, index, arr) => (
          <TeamCard
            key={id}
            imgUrl={imgUrl}
            name={name}
            position={position}
            verticalOffset={(index - 1) % 3 === 0 ? 120 : undefined}
            callback={
              index === arr.length - 1 &&
              employeeList.length < employeesTotalCount
                ? setLastElement
                : undefined
            }
          />
        ))}
      </Flex>
    </Section>
  );
};

export default TeamSection;
