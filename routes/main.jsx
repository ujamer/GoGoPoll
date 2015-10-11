FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route('/new', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <New />
    });
  }
});

FlowRouter.route('/results/:_id', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Results resultId={params._id}/>
    });
  }
});

FlowRouter.route('/vote/:_id', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Vote pollId={params._id} />
    });
  }
});
