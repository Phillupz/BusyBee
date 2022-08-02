# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "app data"

AppDatum.create(image: "", title: "Notebooks", text: "Create notebooks to keep track of notes for all areas of your life.")
AppDatum.create(image: "", title: "Task Management", text: "Stay on top of tasks and errands with customized lists.")
AppDatum.create(image: "", title: "Time Management", text: "Add important events to your calendar so you never miss a beat!")

puts "users"
User.create(first_name: "Phil", last_name: "Zukowski", email: "phillup.zukowski@gmail.com", username: "phil", password: "password")
User.create(first_name: "Beverly", last_name: "Davis", email: "beverly.davis@gmail.com", username: "devb", password: "password1")
User.create(first_name: "Chad", last_name: "Brake", email: "chad.brake@gmail.com", username: "brakechad", password: "password2")
puts "events"

  CalendarEvent.create(
    title: "All Day Event very long title",
    start: "2022, 6, 4, 12:00:00",
    end: "2022, 6, 4, 13:00:00", 
    user_id: 1
  )
  CalendarEvent.create(
    title: "Long Event",
    start: "2022, 6, 7",
    end: "2022, 6, 10", 
    user_id: 1
  )

  CalendarEvent.create(
    title: "Lunch",
    start: "2022, 6, 7, 12:00:00",
    end: "2022, 6, 7, 13:00:00", 
    user_id: 1
  )

  CalendarEvent.create(
    title: "Meeting",
    start: "2022, 6, 7, 12:00:00",
    end: "2022, 6, 7, 14:00:00",
    user_id: 1
  )

  CalendarEvent.create(
    title: "Meeting 2",
    start: "2022, 6, 7, 14:00:00",
    end: "2022, 6, 7, 16:00:00",
    user_id: 1
  )

  # CalendarEvent.create(
  #   title: "Meeting",
  #   start: "2022, 5, 7, 14, 0, 0, 0",
  #   end: "2022, 5, 10, 16, 0, 0, 0", 
  #   user_id: 1
  # )

  # CalendarEvent.create(
  #   title: "DTS STARTS",
  #   start: "2022, 5, 12, 0, 0, 0",
  #   end: "2022, 5, 19, 0, 0, 0", 
  # )

  # CalendarEvent.create(
  #   title: "DTS ENDS",
  #   start: "2022, 5, 20, 0, 0, 0",
  #   end: "2016, 5, 23, 0, 0, 0", 
  #   user_id: 1
  # )

#   {
#     id: 4,
#     title: "Some Event",
#     start: new Date(2015, 3, 9, 0, 0, 0),
#     end: new Date(2015, 3, 9, 0, 0, 0)
#   },
#   {
#     id: 5,
#     title: "Conference",
#     start: new Date(2015, 3, 11),
#     end: new Date(2015, 3, 13),
#     desc: "Big conference for important people"
#   },
#   {
#     id: 6,
#     title: "Meeting",
#     start: new Date(2015, 3, 12, 10, 30, 0, 0),
#     end: new Date(2015, 3, 12, 12, 30, 0, 0),
#     desc: "Pre-meeting meeting, to prepare for the meeting"
#   },
#   {
#     id: 7,
#     title: "Lunch",
#     start: new Date(2015, 3, 12, 12, 0, 0, 0),
#     end: new Date(2015, 3, 12, 13, 0, 0, 0),
#     desc: "Power lunch"
#   },
#   {
#     id: 8,
#     title: "Meeting",
#     start: new Date(2015, 3, 12, 14, 0, 0, 0),
#     end: new Date(2015, 3, 12, 15, 0, 0, 0)
#   },
#   {
#     id: 9,
#     title: "Happy Hour",
#     start: new Date(2015, 3, 12, 17, 0, 0, 0),
#     end: new Date(2015, 3, 12, 17, 30, 0, 0),
#     desc: "Most important meal of the day"
#   },
#   {
#     id: 10,
#     title: "Dinner",
#     start: new Date(2015, 3, 12, 20, 0, 0, 0),
#     end: new Date(2015, 3, 12, 21, 0, 0, 0)
#   },
#   {
#     id: 11,
#     title: "Birthday Party",
#     start: new Date(2015, 3, 13, 7, 0, 0),
#     end: new Date(2015, 3, 13, 10, 30, 0)
#   },
#   {
#     id: 12,
#     title: "Late Night Event",
#     start: new Date(2015, 3, 17, 19, 30, 0),
#     end: new Date(2015, 3, 18, 2, 0, 0)
#   },
#   {
#     id: 13,
#     title: "Multi-day Event",
#     start: new Date(2015, 3, 20, 19, 30, 0),
#     end: new Date(2015, 3, 22, 2, 0, 0)
#   }

# puts "calendar events"
# CalendarEvent.create(title: "Lab day", start: "2022, 6, 24", end: "2022, 6, 24", all_day: true, user_id: 1)
# CalendarEvent.create(title: "Vacation", start: "2022, 6, 26", end: "2022, 6, 30", all_day: false, user_id: 1)
# CalendarEvent.create(title: "Study time", start: "2022, 6, 23", end: "2022, 6, 26", all_day: false, user_id: 1)


puts "notebooks"
Notebook.create(name: "Deploying", user_id: 1)
Notebook.create(name: "Authorization", user_id: 1)
Notebook.create(name: "Redux", user_id: 1)
Notebook.create(name: "Validations", user_id: 2)
Notebook.create(name: "Serializers", user_id: 2)
Notebook.create(name: "Error handling", user_id: 2)
Notebook.create(name: "controllers", user_id: 3)
Notebook.create(name: "routes", user_id: 3)
Notebook.create(name: "migrations", user_id: 3)

# puts "notes"
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 1)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 1)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 1)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 1)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 1)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 1)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 1)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 1)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 2)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 2)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 2)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 3)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 3)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 3)

# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 4)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 4)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 4)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 5)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 5)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 5)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 6)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 6)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 6)

# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 7)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 7)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 7)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 8)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 8)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 8)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 9)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 9)
# Note.create(name: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", notebook_id: 9)

puts "task lists"
TaskList.create(name: "Lorem", user_id: 1)
TaskList.create(name: "Lorem", user_id: 1)
TaskList.create(name: "Lorem", user_id: 1)
TaskList.create(name: "Lorem", user_id: 2)
TaskList.create(name: "Lorem", user_id: 2)
TaskList.create(name: "Lorem", user_id: 2)
TaskList.create(name: "Lorem", user_id: 3)
TaskList.create(name: "Lorem", user_id: 3)
TaskList.create(name: "Lorem", user_id: 3)

puts "tasks"
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 1)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 1)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 1)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 1)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 1)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 1)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 1)

Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 2)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 2)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 2)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 2)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 2)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 2)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 2)

Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 3)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 3)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 3)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 3)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 3)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 3)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 3)

Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 4)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 4)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 4)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 4)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 4)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 4)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 4)

Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 5)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 5)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 5)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 5)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 5)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 5)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 5)

Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 6)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 6)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 6)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 6)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 6)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 6)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 6)

Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 7)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 7)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 7)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 7)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 7)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 7)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 7)

Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 8)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 8)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 8)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 8)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 8)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 8)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 8)

Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 9)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 9)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: true, task_list_id: 9)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 9)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 9)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 9)
Task.create(description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", checked: false, priority: false, task_list_id: 9)