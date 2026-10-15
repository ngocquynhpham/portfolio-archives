import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Image, Title, Text, List, Divider } from "@mantine/core";
import Image1 from "./_assets/diagram.png";
import Image2 from "./_assets/HRM.png";
import Image3 from "./_assets/Workshift.png";
import { useViewportSize } from "@mantine/hooks";
import { NavLink } from "react-router-dom";

export default function HrmPage() {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex className="m-auto" direction={"column"} gap={24}>
          <Title className="project__title" order={width < 573 ? 4 : 2}>
              Human Resource Management - HRM
            </Title>
            <div className="w-fit flex items-center rounded-full bg-blue-300/10 px-3 py-1 font-medium leading-6 text-blue-500">
              Internal Application
            </div>
            <Flex direction={"column"} gap={12} ml={12}>
              <Text fs={"italic"}>
                🏢 Company:{" "}
                <NavLink
                  to={"/project/thangloigroup"}
                  className={"text-blue-500"}
                >
                  Thang Loi Group
                </NavLink>
              </Text>
              <Text fs={"italic"}>📅 Duration: 18 months</Text>
              <Text fs={"italic"}>🎗️ Team-size: ~5 - 10</Text>
              <Text fs={"italic"}>✅ Role: Design & Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: ReactJS, TypeScript, React Syncfusion UI,
                Tailwind.
              </Text>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Project Description
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <Text className="inline" lh={"175%"} size="md">
                  A feature-rich Human Resource Management System that
                  streamlines employee lifecycle management, contract handling,
                  attendance tracking, payroll processing, etc. This project
                  supports multiple companies and includes role-based access
                  control for enhanced security. With a user base of over 200
                  employees across various organizations, this system has
                  significantly reduced HR administrative tasks and improved
                  overall efficiency.
                </Text>
              </Flex>
            </Flex>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={Image1}
              alt="HRM - Image"
            />
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Key learning
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Created a design system for enterprise level application,
                    that included design principles, components, and templates,
                    making sure it could create a consistent and scalable user
                    experience across all of the company's products.
                  </List.Item>
                  <List.Item mb={4}>
                    Building enterprise-scale HR systems with complex business
                    logic, learning to balance flexibility with maintainability
                    while ensuring high performance across multiple companies
                    and user roles.
                  </List.Item>
                  <List.Item mb={4}>
                    Paginated data grid for efficient loading and display of
                    large datasets.
                  </List.Item>
                  <List.Item mb={4}>
                    Advanced filtering options to quickly find specific
                    employee, contracts, etc, based on various criteria.
                  </List.Item>
                </List>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Achievements
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Successfully deployed across multiple companies with 200+
                    users.
                  </List.Item>
                  <List.Item mb={4}>
                    Automated payroll processing, reducing time and effort spent
                    on manual calculations.
                  </List.Item>
                  <List.Item mb={4}>
                    Improved attendance accuracy and flexibility by integrating
                    GPS and facial recognition technology.
                  </List.Item>
                  <List.Item mb={4}>
                    Minimized HR administrative workload.
                  </List.Item>
                </List>
              </Flex>
              <Divider />
            </Flex>

            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Employee Personal Portal
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Designed and developed mobile-first employee portal, ensuing
                    optimal experience across all devices.
                  </List.Item>
                  <List.Item mb={4}>
                    Integrated biometric check-in functionality with geolocation
                    verification for accurate attendance tracking.
                  </List.Item>
                  <List.Item mb={4}>
                    Implemented secure personal information management features
                    including profile updates, attendance history viewing, leave
                    balance tracking and salary.
                  </List.Item>
                </List>
              </Flex>
              <Divider />
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Employee Management
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Comprehensive employee profile management with
                    multi-position assignment feature.
                  </List.Item>
                  <List.Item mb={4}>
                    Any changes to employee information must be reviewed and
                    approved by HR before being finalized.
                  </List.Item>
                </List>
              </Flex>
              <Divider />
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Contract Management
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Company-specific contract and addendum creation.
                  </List.Item>
                </List>
              </Flex>
              <Divider />
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Payroll Management
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Customizable salary template configuration: Company-specific
                    salary rules; Employee-specific salary rules; System
                    variable integration; Custom formula support.
                  </List.Item>
                  <List.Item mb={4}>Manual salary detail adjustment.</List.Item>
                  <List.Item mb={4}>
                    Generate dynamic column based on payroll formula.
                  </List.Item>
                  <List.Item mb={4}>
                    Added column-level permission system for sensitive data.
                  </List.Item>
                  <List.Item mb={4}>
                    <Text className="text-wrap">
                      HR department set supported employee-related password rule
                      for month (for example birth date, employee ID formats)
                    </Text>
                  </List.Item>
                  <List.Item mb={4}>Viewing and salary confirmation.</List.Item>
                </List>
              </Flex>
              <Divider />
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Work Shift Management
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>Flexible shift configuration.</List.Item>
                  <List.Item mb={4}>
                    User-friendly week/month view toggle.
                  </List.Item>
                  <List.Item>
                    <List size="md" className="hasOrder" pl={0}>
                      Multi-level shift configuration:
                      <List.Item mb={4}>
                        Company-wide shift templates.
                      </List.Item>
                      <List.Item mb={4}>
                        Department-based assignments.
                      </List.Item>
                      <List.Item mb={4}>
                        Individual schedule customization.
                      </List.Item>
                    </List>
                  </List.Item>
                </List>
                <Image
                  className="project__image--hero"
                  h={"80%"}
                  fit="cover"
                  src={Image3}
                  alt="HRM - Image"
                />
              </Flex>
              <Divider />
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Attendance & Time Management
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Monthly view, color-coded work status visualization.
                  </List.Item>
                  <List.Item mb={4}>Automated attendance management.</List.Item>
                  <List.Item mb={4}>
                    <List size="md" className="hasOrder" pl={0}>
                      Quick summary statistics:
                      <List.Item mb={4}>Unauthorized absences.</List.Item>
                      <List.Item mb={4}>Permitted leaves.</List.Item>
                      <List.Item mb={4}>Late checkin/early checkout.</List.Item>
                      <List.Item mb={4}>Missed check-ins count.</List.Item>
                    </List>
                  </List.Item>
                  <List.Item mb={4}>
                    Mobile-based facial recognition with GPS validation.
                  </List.Item>
                  <List.Item mb={4}>
                    Scheduling attendance monthly locking.
                  </List.Item>
                </List>
              </Flex>
              <Divider />
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Leave Management & Overtime request system
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Dynamic request workflow: Multiple leave type support
                    (vacation, sick leave, maternity); Overtime work hours
                    request handling
                  </List.Item>
                </List>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction={"column"} pt={16} gap={12}>
            <Title className="project__description" order={width < 768 ? 6 : 4}>
              Gallery
            </Title>
            <i className="text-xs">* Provide if required.</i>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={Image2}
              alt="HRM - Image"
            />
            <i className="text-xs">
              The visuals have been modified compared to the original software,
              including color schemes, special business functionalities, etc.
            </i>
          </Flex>
    </ProjectShell>
  );
}
