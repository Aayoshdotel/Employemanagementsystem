const Employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Compile weekly sales data and create a report.",
        "taskDate": "2026-06-15",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Inventory",
        "taskDescription": "Check stock levels and update inventory records.",
        "taskDate": "2026-06-10",
        "category": "Inventory"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Client Follow-up",
        "taskDescription": "Contact clients regarding pending orders.",
        "taskDate": "2026-06-08",
        "category": "Customer Service"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Website Testing",
        "taskDescription": "Test newly deployed website features.",
        "taskDate": "2026-06-14",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Bug Fixes",
        "taskDescription": "Resolve reported UI bugs.",
        "taskDate": "2026-06-16",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database Backup",
        "taskDescription": "Create a full backup of the production database.",
        "taskDate": "2026-06-09",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "API Documentation",
        "taskDescription": "Document REST API endpoints.",
        "taskDate": "2026-06-07",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Prepare content for upcoming campaign.",
        "taskDate": "2026-06-18",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Newsletter Design",
        "taskDescription": "Create monthly newsletter template.",
        "taskDate": "2026-06-05",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Content Review",
        "taskDescription": "Review blog posts before publication.",
        "taskDate": "2026-06-06",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO Analysis",
        "taskDescription": "Analyze website SEO performance.",
        "taskDate": "2026-06-20",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Ad Performance Report",
        "taskDescription": "Prepare report for ad campaign results.",
        "taskDate": "2026-06-03",
        "category": "Reporting"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Recruitment Screening",
        "taskDescription": "Review candidate applications.",
        "taskDate": "2026-06-13",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Schedule Interviews",
        "taskDescription": "Coordinate interview timings.",
        "taskDate": "2026-06-17",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Employee Onboarding",
        "taskDescription": "Complete onboarding process for new hires.",
        "taskDate": "2026-06-02",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Policy Update",
        "taskDescription": "Revise company leave policy.",
        "taskDate": "2026-06-01",
        "category": "Administration"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Support Tickets",
        "taskDescription": "Respond to open support requests.",
        "taskDate": "2026-06-12",
        "category": "Support"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Knowledge Base Update",
        "taskDescription": "Update support documentation.",
        "taskDate": "2026-06-14",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Customer Survey",
        "taskDescription": "Analyze customer feedback responses.",
        "taskDate": "2026-06-04",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Training Session",
        "taskDescription": "Attend customer service training.",
        "taskDate": "2026-06-05",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Escalated Complaint",
        "taskDescription": "Resolve a high-priority customer complaint.",
        "taskDate": "2026-06-07",
        "category": "Support"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Live Chat Support",
        "taskDescription": "Handle customer queries through live chat.",
        "taskDate": "2026-06-13",
        "category": "Support"
      }
    ]
  }
]

const Admins = [
    {
  "id": 100,
  "email": "admin@example.com",
  "password": "123"
}
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(Employees))
    localStorage.setItem('admins', JSON.stringify(Admins))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admins'))
    
}