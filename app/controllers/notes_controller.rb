class NotesController < ApplicationController

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      notes = user.notes
    else 
      notes = Note.all
    end
    render json: notes, status: :ok
  end

  def show
    note = find_note
    render json: note, status: :ok
  end

  def create
    note = Note.create(note_params)
    render json: note, status: :created
  end

  def update
    note = find_note
    note.update(note_params)
    render json: note, status: :ok
  end

  def destroy
    note = find_note
    note.destroy
    head :no_content
  end

  private

  def note_params
    params.permit(:name, :text, :notebook_id)
  end

  def find_note
    note = Note.find(params[:id])
  end

end
