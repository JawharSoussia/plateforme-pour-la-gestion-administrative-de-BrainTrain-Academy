
// Types
export type UserRole = "student" | "instructor" | "admin";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  phone: string;
  createdAt: string;
  status: "active" | "inactive" | "pending";
};

export type Course = {
  id: string;
  title: string;
  instructor: string;
  category: string;
  enrolledStudents: number;
  startDate: string;
  endDate: string;
  status: "active" | "completed" | "upcoming";
};

export type Payment = {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  date: string;
  method: "card" | "bank" | "cash";
  status: "completed" | "pending" | "failed";
  courseId: string;
  courseTitle: string;
};

export type AttendanceRecord = {
  id: string;
  userId: string;
  userName: string;
  courseId: string;
  courseTitle: string;
  date: string;
  status: "present" | "absent" | "late" | "excused";
};

// Mock Data
export const mockUsers: User[] = [
  {
    id: "u1",
    firstName: "Thomas",
    lastName: "Martin",
    email: "thomas.martin@example.com",
    role: "student",
    phone: "06 12 34 56 78",
    createdAt: "2023-11-15",
    status: "active",
  },
  {
    id: "u2",
    firstName: "Claire",
    lastName: "Durand",
    email: "claire.durand@example.com",
    role: "student",
    phone: "06 23 45 67 89",
    createdAt: "2023-12-02",
    status: "active",
  },
  {
    id: "u3",
    firstName: "Antoine",
    lastName: "Lefebvre",
    email: "antoine.lefebvre@example.com",
    role: "instructor",
    phone: "06 34 56 78 90",
    createdAt: "2023-10-05",
    status: "active",
  },
  {
    id: "u4",
    firstName: "Sophie",
    lastName: "Laurent",
    email: "sophie.laurent@example.com",
    role: "student",
    phone: "06 45 67 89 01",
    createdAt: "2024-01-10",
    status: "active",
  },
  {
    id: "u5",
    firstName: "Marc",
    lastName: "Dupuis",
    email: "marc.dupuis@example.com",
    role: "student",
    phone: "06 56 78 90 12",
    createdAt: "2024-02-15",
    status: "pending",
  },
  {
    id: "u6",
    firstName: "Julie",
    lastName: "Moreau",
    email: "julie.moreau@example.com",
    role: "instructor",
    phone: "06 67 89 01 23",
    createdAt: "2023-09-20",
    status: "active",
  },
  {
    id: "u7",
    firstName: "Lucas",
    lastName: "Girard",
    email: "lucas.girard@example.com",
    role: "student",
    phone: "06 78 90 12 34",
    createdAt: "2024-03-01",
    status: "active",
  },
  {
    id: "u8",
    firstName: "Emilie",
    lastName: "Simon",
    email: "emilie.simon@example.com",
    role: "student",
    phone: "06 89 01 23 45",
    createdAt: "2024-01-25",
    status: "inactive",
  },
  {
    id: "u9",
    firstName: "Alexandre",
    lastName: "Petit",
    email: "alexandre.petit@example.com",
    role: "admin",
    phone: "06 90 12 34 56",
    createdAt: "2023-08-10",
    status: "active",
  },
];

export const mockCourses: Course[] = [
  {
    id: "c1",
    title: "JavaScript Avancé",
    instructor: "Antoine Lefebvre",
    category: "Développement Web",
    enrolledStudents: 15,
    startDate: "2024-02-10",
    endDate: "2024-05-20",
    status: "active",
  },
  {
    id: "c2",
    title: "Python Débutant",
    instructor: "Julie Moreau",
    category: "Programmation",
    enrolledStudents: 20,
    startDate: "2024-01-15",
    endDate: "2024-04-15",
    status: "active",
  },
  {
    id: "c3",
    title: "UX/UI Design",
    instructor: "Antoine Lefebvre",
    category: "Design",
    enrolledStudents: 12,
    startDate: "2024-03-05",
    endDate: "2024-06-05",
    status: "active",
  },
  {
    id: "c4",
    title: "React Débutant",
    instructor: "Julie Moreau",
    category: "Développement Web",
    enrolledStudents: 18,
    startDate: "2024-02-20",
    endDate: "2024-04-28",
    status: "active",
  },
  {
    id: "c5",
    title: "Data Science Fondamentaux",
    instructor: "Antoine Lefebvre",
    category: "Science des données",
    enrolledStudents: 10,
    startDate: "2024-05-10",
    endDate: "2024-08-10",
    status: "upcoming",
  },
  {
    id: "c6",
    title: "HTML/CSS Fondamentaux",
    instructor: "Julie Moreau",
    category: "Développement Web",
    enrolledStudents: 25,
    startDate: "2023-11-10",
    endDate: "2024-01-20",
    status: "completed",
  },
];

export const mockPayments: Payment[] = [
  {
    id: "p1",
    userId: "u1",
    userName: "Thomas Martin",
    amount: 450,
    date: "2024-01-15",
    method: "card",
    status: "completed",
    courseId: "c1",
    courseTitle: "JavaScript Avancé",
  },
  {
    id: "p2",
    userId: "u2",
    userName: "Claire Durand",
    amount: 350,
    date: "2024-01-20",
    method: "bank",
    status: "completed",
    courseId: "c3",
    courseTitle: "UX/UI Design",
  },
  {
    id: "p3",
    userId: "u4",
    userName: "Sophie Laurent",
    amount: 450,
    date: "2024-01-25",
    method: "card",
    status: "completed",
    courseId: "c1",
    courseTitle: "JavaScript Avancé",
  },
  {
    id: "p4",
    userId: "u5",
    userName: "Marc Dupuis",
    amount: 350,
    date: "2024-02-10",
    method: "cash",
    status: "pending",
    courseId: "c4",
    courseTitle: "React Débutant",
  },
  {
    id: "p5",
    userId: "u7",
    userName: "Lucas Girard",
    amount: 300,
    date: "2024-03-05",
    method: "bank",
    status: "completed",
    courseId: "c2",
    courseTitle: "Python Débutant",
  },
];

export const mockAttendance: AttendanceRecord[] = [
  {
    id: "a1",
    userId: "u1",
    userName: "Thomas Martin",
    courseId: "c1",
    courseTitle: "JavaScript Avancé",
    date: "2024-04-15",
    status: "present",
  },
  {
    id: "a2",
    userId: "u2",
    userName: "Claire Durand",
    courseId: "c3",
    courseTitle: "UX/UI Design",
    date: "2024-04-15",
    status: "present",
  },
  {
    id: "a3",
    userId: "u4",
    userName: "Sophie Laurent",
    courseId: "c1",
    courseTitle: "JavaScript Avancé",
    date: "2024-04-15",
    status: "absent",
  },
  {
    id: "a4",
    userId: "u7",
    userName: "Lucas Girard",
    courseId: "c2",
    courseTitle: "Python Débutant",
    date: "2024-04-16",
    status: "late",
  },
  {
    id: "a5",
    userId: "u8",
    userName: "Emilie Simon",
    courseId: "c4",
    courseTitle: "React Débutant",
    date: "2024-04-16",
    status: "excused",
  },
];
