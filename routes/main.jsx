FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route('/create', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Create />
    });
  }
});

FlowRouter.route('/result/:_id', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Result />
    });
  }
});

FlowRouter.route('/:_id', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Poll _id={params._id} />
    });
  }
});
